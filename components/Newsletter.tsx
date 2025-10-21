'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' }
    })
    setStatus(res.ok ? 'success' : 'error')
    if (res.ok) {
      setTimeout(() => setEmail(''), 2000)
    }
  }

  return (
    <motion.form 
      onSubmit={onSubmit} 
      className="card max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <label className="text-sm font-medium flex items-center gap-2">
        <Mail size={16} className="text-brand" />
        Votre e-mail
      </label>
      <div className="mt-3 flex gap-3">
        <input
          type="email"
          required
          placeholder="vous@exemple.fr"
          className="flex-1 rounded-xl px-4 py-3 bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-800 focus:border-brand dark:focus:border-brand outline-none transition-colors"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <motion.button 
          className="btn-primary whitespace-nowrap"
          disabled={status === 'loading'}
          whileTap={{ scale: 0.95 }}
        >
          {status === 'loading' ? 'Envoi...' : "S'inscrire"}
        </motion.button>
      </div>
      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.p 
            className="text-emerald-600 dark:text-emerald-400 mt-3 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <CheckCircle size={16} />
            Merci ! Vérifiez votre boîte mail.
          </motion.p>
        )}
        {status === 'error' && (
          <motion.p 
            className="text-red-600 dark:text-red-400 mt-3 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <AlertCircle size={16} />
            Une erreur est survenue. Réessayez.
          </motion.p>
        )}
      </AnimatePresence>
    </motion.form>
  )
}
