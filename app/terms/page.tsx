import Link from "next/link"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-16">
      <article className="container mx-auto max-w-4xl px-4">
        <header className="mb-10">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">Terms of Service</h1>
          <p className="text-lg text-slate-600">HiResalesTalent Solutions</p>
        </header>

        <div className="space-y-8 rounded-xl bg-white p-6 shadow-lg sm:p-10">
          <p className="rounded-lg border border-amber-300 bg-amber-50 p-4 font-medium text-amber-900">
            Draft for legal review. These terms should be reviewed and approved before publication.
          </p>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">1. Scope and Acceptance</h2>
            <p className="leading-7 text-slate-600">
              These draft terms apply to your access to and use of the HiResalesTalent website. By using the website,
              you agree to follow the terms that apply to your use. Any separate written agreement for a product or
              service will govern where it conflicts with these website terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">2. Website Information</h2>
            <p className="leading-7 text-slate-600">
              Website content is provided for general informational purposes. Product descriptions, availability,
              features, and other information may change. Please confirm current details with us before relying on
              them or making a business decision.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">3. Acceptable Use</h2>
            <p className="leading-7 text-slate-600">
              You may use the website only in compliance with applicable law. You must not interfere with its
              operation or security, attempt unauthorized access, or use the website to distribute unlawful or
              harmful material.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">4. Intellectual Property</h2>
            <p className="leading-7 text-slate-600">
              The website and its content are owned by HiResalesTalent Solutions or its licensors and are protected
              by applicable intellectual-property laws. These terms do not transfer ownership or grant rights except
              for the limited right to access and use the website as intended.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">5. Third-Party Services and Links</h2>
            <p className="leading-7 text-slate-600">
              The website may link to third-party sites or services. Those services are governed by their own terms
              and policies. We do not control third-party content or services, and a link does not by itself mean we
              endorse them.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">6. Availability and Disclaimers</h2>
            <p className="leading-7 text-slate-600">
              We may update, suspend, or discontinue website features. To the extent permitted by applicable law, the
              website is provided on an “as is” and “as available” basis, without warranties not expressly stated in a
              separate written agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">7. Changes to These Terms</h2>
            <p className="leading-7 text-slate-600">
              We may revise these terms by posting an updated version on this page. The revised terms apply from the
              date stated in the published version, subject to applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-semibold text-slate-900">8. Contact</h2>
            <p className="leading-7 text-slate-600">
              For questions about these terms, contact{" "}
              <a className="text-blue-700 underline hover:text-blue-900" href="mailto:contact@hiresalestalent.com">
                contact@hiresalestalent.com
              </a>{" "}
              or use our <Link className="text-blue-700 underline hover:text-blue-900" href="/contact">contact page</Link>.
            </p>
          </section>
        </div>
      </article>
    </div>
  )
}
