"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Icon, type IconName } from "@/components/Icon";
import { clients } from "@/lib/content";
import { revealClass, useRevealOnScroll } from "@/lib/reveal";

function clientIcon(category: string): IconName {
  if (category === "Trattoria" || category === "Ristorazione") return "utensils";
  return "store";
}

const featured = clients.find((c) => "featured" in c && c.featured)!;
const others = clients.filter((c) => !("featured" in c && c.featured));

export function Clients() {
  const intro = useRevealOnScroll();
  const featuredReveal = useRevealOnScroll({ duration: 0.5 });
  const card = useRevealOnScroll({ y: 20, duration: 0.45 });

  return (
    <section id="clienti" className="section bg-surface/50">
      <motion.div className="container">
        <motion.div
          {...intro}
          className={revealClass(
            "section-intro mx-auto max-w-2xl text-center lg:mx-0 lg:text-left",
          )}
        >
          <p className="eyebrow">Clienti</p>
          <h2 className="heading-lg mt-3">Progetti di cui andiamo orgogliosi</h2>
          <p className="text-body mt-4">
            Imprese e locali con cui collaboriamo o abbiamo collaborato in Puglia e oltre.
          </p>
        </motion.div>

        <motion.div {...featuredReveal} className={revealClass("mt-8 sm:mt-12")}>
          <a
            href={featured.url}
            target="_blank"
            rel="noopener noreferrer"
            className="surface-card surface-card-interactive group block overflow-hidden"
          >
            <motion.div className="grid md:grid-cols-2">
              <motion.div className="relative aspect-[16/10] min-h-[200px] bg-elevated md:aspect-auto md:min-h-[280px]">
                {"image" in featured && (
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? featured.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
              </motion.div>
              <motion.div className="flex flex-col justify-center p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-sky">
                  In evidenza
                </p>
                <h3 className="mt-2 text-xl font-bold text-white transition-colors group-hover:text-sky sm:text-2xl">
                  {featured.name}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
                  <Icon name={clientIcon(featured.category)} className="h-3.5 w-3.5 text-sky" />
                  {featured.category}
                </p>
                {"description" in featured && (
                  <p className="text-body mt-4">{featured.description}</p>
                )}
                <p className="mt-6 flex items-center gap-1.5 font-mono text-sm text-zinc-500">
                  {featured.domain}
                  <Icon name="external-link" className="h-3.5 w-3.5" />
                </p>
              </motion.div>
            </motion.div>
          </a>
        </motion.div>

        <motion.div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {others.map((client, i) => (
            <motion.a
              key={client.url}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              {...card}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={revealClass(
                "surface-card surface-card-interactive group block p-5 sm:p-7",
              )}
            >
              <motion.div className="flex items-start justify-between gap-4">
                <motion.div>
                  <h3 className="text-lg font-bold text-white transition-colors group-hover:text-sky">
                    {client.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-zinc-500">
                    <Icon name={clientIcon(client.category)} className="h-3.5 w-3.5 text-sky" />
                    {client.category}
                  </p>
                </motion.div>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-zinc-500 transition-colors group-hover:border-sky group-hover:text-sky"
                  aria-hidden
                >
                  <Icon name="external-link" className="h-4 w-4" />
                </span>
              </motion.div>
              <p className="mt-5 font-mono text-sm text-zinc-500">{client.domain}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
