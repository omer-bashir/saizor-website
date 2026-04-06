import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import apiServerClient from '@/lib/apiServerClient';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, loading]);

  useEffect(() => {
    if (open && textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [open]);

  const buildHistory = (msgs) => {
    return msgs.slice(-6).map((m) => ({
      role: m.role,
      content: m.content,
    }));
  };

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: 'user', content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput('');
    setLoading(true);

    try {
      const history = buildHistory(messages);
      const res = await apiServerClient.fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text, history }),
      });

      if (!res.ok) {
        throw new Error('Server error');
      }

      const data = await res.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Sorry, something went wrong. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const handleInput = (e) => {
    setInput(e.target.value);
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto';
      el.style.height = Math.min(el.scrollHeight, 72) + 'px';
    }
  };

  return (
    <>
      {/* Chat Panel */}
      <div
        className={[
          'fixed z-50 bg-background border border-border shadow-2xl flex flex-col',
          'transition-all duration-300 ease-in-out',
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none',
          // Mobile: full screen
          'max-sm:inset-0 max-sm:rounded-none max-sm:bottom-0 max-sm:right-0 max-sm:w-full max-sm:h-full',
          // Desktop
          'sm:bottom-24 sm:right-6 sm:w-[380px] sm:h-[520px] sm:rounded-2xl',
        ].join(' ')}
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-border shrink-0">
          <div>
            <p className="font-semibold text-sm leading-tight">Ask me anything</p>
            <p className="text-xs text-muted-foreground">Powered by Saizor AI</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Online
            </span>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-3">
          {messages.length === 0 && !loading ? (
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center bg-muted rounded-2xl px-5 py-4 max-w-xs">
                <p className="text-sm text-foreground leading-relaxed">
                  👋 Hi there! Ask me anything about Saizor&apos;s services, AI audits, pricing, or how we can help your business.
                </p>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={[
                    'flex',
                    msg.role === 'user' ? 'justify-end' : 'justify-start',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'px-4 py-2.5 text-sm leading-relaxed max-w-[80%]',
                      msg.role === 'user'
                        ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm whitespace-pre-wrap'
                        : 'bg-muted text-foreground rounded-2xl rounded-bl-sm',
                    ].join(' ')}
                  >
                    {msg.role === 'user' ? msg.content : (
                      <ReactMarkdown
                        components={{
                          h1: ({ children }) => <p className="text-sm font-semibold mb-1">{children}</p>,
                          h2: ({ children }) => <p className="text-sm font-semibold mb-1">{children}</p>,
                          h3: ({ children }) => <p className="text-sm font-semibold mb-1">{children}</p>,
                          p: ({ children }) => <p className="mb-1 last:mb-0">{children}</p>,
                          ul: ({ children }) => <ul className="list-disc pl-4 mb-1">{children}</ul>,
                          ol: ({ children }) => <ol className="list-decimal pl-4 mb-1">{children}</ol>,
                          li: ({ children }) => <li className="mb-0.5">{children}</li>,
                          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
                        }}
                      >
                        {msg.content}
                      </ReactMarkdown>
                    )}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-muted rounded-2xl rounded-bl-sm px-4 py-3 flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-2 h-2 rounded-full bg-muted-foreground/60 animate-bounce" />
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input bar */}
        <div className="border-t border-border px-3 py-2.5 flex items-end gap-2 shrink-0">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder="Type your question..."
            disabled={loading}
            className="flex-1 resize-none bg-transparent text-sm placeholder:text-muted-foreground focus:outline-none min-h-[36px] max-h-[72px] py-2 leading-tight disabled:opacity-50"
          />
          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
            className="shrink-0 w-9 h-9 rounded-xl flex items-center justify-center bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
            aria-label="Send message"
          >
            <Send size={16} />
          </button>
        </div>
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className={[
          'fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full',
          'bg-primary text-primary-foreground shadow-lg',
          'flex items-center justify-center',
          'transition-transform duration-200 hover:scale-105 active:scale-95',
          !open && 'before:absolute before:inset-0 before:rounded-full before:border-2 before:border-primary before:animate-ping before:opacity-40',
        ].join(' ')}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>
    </>
  );
}
