'use client'

import { motion } from 'framer-motion'
import { Section } from '@/components/Section'
import { IssueCard } from '@/components/IssueCard'
import { issues } from '@/data/issues'

export default function ProgrammePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <>
      <Section 
        title="Notre Programme" 
        subtitle="Bien plus qu'un simple programme… nous avons une vision pour MIAGE!"
      >
        <motion.div 
          className="max-w-3xl mx-auto mb-12 space-y-4 text-neutral-600 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.p 
            className="text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Ce que je vous propose aujourd&apos;hui, c&apos;est bien plus qu&apos;un simple programme : 
            c&apos;est une stratégie collective sur l&apos;autoroute du succès.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Tout commence par vous. Notre première étape sera de recueillir les attentes de chacun, 
            afin de bâtir ensemble un bureau uni autour d&apos;une vision commune. Une équipe soudée, 
            motivée et déterminée à faire de cette année une aventure inoubliable.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {issues.map((i) => (
            <motion.div key={i.slug} variants={itemVariants}>
              <IssueCard issue={i} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto space-y-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="card group"
            variants={itemVariants}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="h3 mb-4 flex items-center gap-3">
              <motion.span 
                className="text-4xl"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                🎓
              </motion.span>
              Sur le plan académique
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              {[
                "Revalorisation du travail et réussite pour tous : objectif validation en session 1 !",
                "Création de groupes d'entraide pour accompagner chacun dans sa progression et remise sur pied des clubs qui ont disparu depuis quelques années.",
                "Accompagnement des équipes pour les concours, hackathons et compétitions extra-universitaires.",
                "Organisation et participation à des webinaires, sessions de formation et caravanes informatiques pour renforcer nos compétences techniques et personnelles."
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-brand mt-1">✓</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="card group"
            variants={itemVariants}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="h3 mb-4 flex items-center gap-3">
              <motion.span 
                className="text-4xl"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                ❤️
              </motion.span>
              Sur le plan de la vie à CESTIA
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              {[
                "Renforcement de la cohésion et création d'un véritable esprit d'héritage entre les promotions.",
                "Valorisation du respect, de la solidarité et de l'entraide.",
                "Soutien aux initiatives étudiantes et organisation d'activités extrascolaires : tournois, matchs inter-promotions, journées solidaires."
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-brand mt-1">✓</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="card group"
            variants={itemVariants}
            whileHover={{ 
              y: -4,
              transition: { duration: 0.3 }
            }}
          >
            <h3 className="h3 mb-4 flex items-center gap-3">
              <motion.span 
                className="text-4xl"
                whileHover={{ 
                  scale: 1.2, 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                💼
              </motion.span>
              Sur le plan professionnel
            </h3>
            <ul className="space-y-3 text-neutral-600 dark:text-neutral-300">
              {[
                "Visites d'entreprises et rencontres inspirantes avec les anciens.",
                "Préparation au monde du travail : ateliers de rédaction de CV, simulations d'entretiens, et notions de secourisme et de savoir-être professionnel.",
                "Création de l'annuaire des Alumni pour faciliter le réseautage.",
                "Développement de partenariats stratégiques avec des entreprises et institutions."
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <span className="text-brand mt-1">✓</span>
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="text-center py-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              className="text-lg text-neutral-600 dark:text-neutral-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Et bien d&apos;autres activités sont prévues, car ce n&apos;est que la partie visible de l&apos;iceberg.
            </motion.p>
            <motion.p 
              className="text-xl font-semibold text-brand mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              En résumé, un BDE dynamique, innovant et uni,
            </motion.p>
            <motion.p 
              className="text-xl font-semibold text-brand"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              au service d&apos;une filière forte, visible et solidaire.
            </motion.p>
          </motion.div>
        </motion.div>
      </Section>
    </>
  )
}
