import Link from "next/link"

const prohibitedActivities = [
  "Dispatching unsolicited commercial emails that include links or references to projectconsultantsusa.com.",
  "Marketing this website via unsolicited SMS, WhatsApp messages, social media direct messages, or other digital communication channels.",
  "Utilizing purchased, harvested, scraped, or unapproved email lists to promote this website.",
  "Operating automated tools or systems to send unsolicited promotional messages.",
  "Altering email headers, impersonating Project Consultants USA, or falsely implying any connection with this website.",
  "Directly or indirectly hiring third parties to execute unsolicited promotional campaigns on behalf of this website.",
]

const reservedActions = [
  "Pursue civil and criminal lawsuits where legally applicable.",
  "Report violators to law enforcement and appropriate regulatory bodies.",
  "Demand financial restitution for reputational harm, business losses, and other related damages.",
  "Immediately and permanently sever any business, contractual, or affiliate ties with the violator.",
  "Report abusive practices to internet service providers, web hosts, domain registrars, and email service providers.",
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <article className="container mx-auto max-w-4xl px-4">
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Anti-Spam Policy – Zero Tolerance
          </h1>
          <p className="text-lg text-slate-600">
            Website: ProjectConsultantsUSA - Expert CRM Implementation
          </p>
        </header>

        <div className="space-y-8 rounded-xl bg-white p-6 shadow-lg sm:p-10">
          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">1. Zero-Tolerance Policy</h2>
            <p className="leading-7 text-slate-600">
              Project Consultants USA upholds a strict zero-tolerance policy against spam and unsolicited outreach.
              Under no circumstances may any individual, business, affiliate, marketing firm, third-party vendor, or
              other entity advertise, market, or circulate information regarding this website via unsolicited messages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">2. Strictly Prohibited Activities</h2>
            <p className="mb-3 leading-7 text-slate-600">The following practices are strictly forbidden:</p>
            <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-600">
              {prohibitedActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">3. Unauthorized Advertising</h2>
            <p className="leading-7 text-slate-600">
              Project Consultants USA does not grant permission to any individual or entity to advertise its website
              through unsolicited communications. Any party participating in such practices without explicit
              authorization will be held solely liable for their actions and any resulting legal repercussions.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">4. Severe Penalties and Legal Action</h2>
            <p className="mb-3 leading-7 text-slate-600">
              Any individual or entity found guilty of breaching this policy may face the harshest available legal
              action and maximum penalties allowed under applicable laws. Project Consultants USA reserves the right
              to:
            </p>
            <ul className="list-disc space-y-2 pl-6 leading-7 text-slate-600">
              {reservedActions.map((action) => (
                <li key={action}>{action}</li>
              ))}
            </ul>
            <p className="mt-3 leading-7 text-slate-600">No breach of this policy will be knowingly overlooked.</p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">5. Reporting Spam</h2>
            <p className="leading-7 text-slate-600">
              Should you receive any unsolicited message promoting or mentioning projectconsultantsusa.com, please
              notify us via the{" "}
              <Link href="/contact" className="text-blue-700 underline hover:text-blue-900">
                official contact methods listed on our website
              </Link>
              , ideally attaching the original message, complete email headers, and any relevant supporting proof.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">6. Final Declaration</h2>
            <p className="leading-7 text-slate-600">
              Project Consultants USA firmly denounces all varieties of spam and unsolicited promotion. Any party
              found responsible for such conduct will be prosecuted to the fullest extent permitted by applicable law.
            </p>
          </section>

          <footer className="border-t border-slate-200 pt-6 text-center">
            <p className="text-xl font-bold text-slate-900">ZERO SPAM. ZERO TOLERANCE. NO EXCEPTIONS.</p>
            <p className="mt-3 font-semibold text-slate-700">
              ProjectConsultantsUSA - Expert CRM Implementation
            </p>
            <p className="mt-1 text-slate-600">
              Professional CRM implementation and sales process optimization services in Phoenix, Arizona.
            </p>
          </footer>
        </div>
      </article>
    </div>
  )
}
