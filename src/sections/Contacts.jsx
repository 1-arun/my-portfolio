import SectionTitle from "../components/layout/SectionTitle";
import { Mail, Calendar, Twitter, Linkedin } from "lucide-react";
import siteConfig from "../config/site.config";

export default function Contacts() {
  return (
    <section className="py-12">
      <SectionTitle
        title="Get in Touch"
        subtitle="I'm always open to new opportunities and collaborations"
      />

      <div className="mt-8 rounded-xl border border-gray-200 bg-white/60 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-950/70 p-5 sm:p-6">
        {/* Schedule Meeting Button */}
        <div className="mb-6 flex justify-center">
          <a
            href="https://cal.com/arun-ngksw2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition-colors hover:bg-gray-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            <Calendar size={20} />
            Schedule a Meeting
          </a>
        </div>

        {/* Contact Info Card */}
        <div className="mx-auto max-w-2xl rounded-lg border border-gray-200 bg-white p-4 sm:p-5 md:p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900/80">
          <h3 className="mb-3 text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
            Get in Touch
          </h3>
          <p className="mb-5 leading-relaxed text-zinc-600 dark:text-zinc-300">
            Want to chat? Just shoot me a dm on twitter, or directly on my
            contact. Feel free to reach out via email also
          </p>

          {/* Contact Methods */}
          <div className="space-y-4">
            {/* Email */}
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors hover:bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <div className="rounded-lg border border-gray-300 bg-white p-3 transition-colors dark:border-zinc-700 dark:bg-zinc-900">
                <Mail size={20} className="text-zinc-700 dark:text-zinc-200" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  Email
                </p>
                <p className="break-all text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">
                  {siteConfig.socials.email}
                </p>
              </div>
            </a>

            {/* Twitter/X */}
            <a
              href={siteConfig.socials.x}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors hover:bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <div className="rounded-lg border border-gray-300 bg-white p-3 transition-colors dark:border-zinc-700 dark:bg-zinc-900">
                <Twitter
                  size={20}
                  className="text-zinc-700 dark:text-zinc-200"
                />
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  Twitter / X
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">
                  @1Arun_
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={siteConfig.socials.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-lg border border-gray-200 bg-gray-100 p-4 transition-colors hover:bg-gray-200 dark:border-zinc-800 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            >
              <div className="rounded-lg border border-gray-300 bg-white p-3 transition-colors dark:border-zinc-700 dark:bg-zinc-900">
                <Linkedin
                  size={20}
                  className="text-zinc-700 dark:text-zinc-200"
                />
              </div>
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  LinkedIn
                </p>
                <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100 sm:text-base">
                  Arun Chauhan
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
