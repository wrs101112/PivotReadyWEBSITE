import { useState } from "react";
import { FileText, Shield, Cookie, Eye, Download, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const Legal = () => {
  const [activeTab, setActiveTab] = useState<string>('terms');

  const tabs = {
    terms: {
      title: 'Terms & Conditions',
      icon: FileText,
      content: (
        <div className="space-y-6">
          <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74]">
            <p className="text-sm text-[#2F2F2F]">
              <strong>Effective Date:</strong> May 2025 | <strong>Last Updated:</strong> May 2025
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">1. Acceptance of Terms</h3>
            <p className="text-[#2F2F2F]">
              By creating an account and using TEN ELEVEN TWELVE LLC's services, you agree to these Terms and Conditions. 
              If you do not agree, please refrain from using our website or services. These terms constitute a legal agreement between you and TEN ELEVEN TWELVE LLC.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">2. Services Provided</h3>
            <p className="text-[#2F2F2F] mb-3">TEN ELEVEN TWELVE LLC offers the following services:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Software as a Service (SaaS) solutions, including Software MVP Development and Go-To-Market (GTM) services</li>
              <li>Digital tools to empower non-traditional founders</li>
              <li>Strategic Advisory Services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">3. User Eligibility</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Users of all ages are welcome to use PivotReady's services</li>
              <li>By using the services, you agree not to engage in unlawful activities</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">4. Account Creation and Security</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>All users must create an account to access our software tools</li>
              <li>Users are solely responsible for maintaining the confidentiality and security of their account credentials</li>
              <li>PivotReady is not liable for any unauthorized access to your account due to your failure to safeguard your credentials</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">5. Payment Terms</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Payments are processed through Paddle.com. TEN ELEVEN TWELVE LLC accepts credit cards, debit cards, and other payment options supported by Paddle</li>
              <li>Subscription options include monthly, 3-month, and annual plans. Free trials and a free version are also available</li>
              <li>Discount codes may apply to certain purchases</li>
              <li><strong>Refunds:</strong> TEN ELEVEN TWELVE LLC does not offer refunds. You may cancel your subscription, but cancellation takes effect at the end of the current billing cycle</li>
            </ul>
            <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74] mt-4">
              <h4 className="font-medium text-[#4A7C74] mb-2">Merchant of Record</h4>
              <p className="text-sm text-[#2F2F2F]">
                TEN ELEVEN TWELVE LLC's order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all TEN ELEVEN TWELVE LLC orders. 
                Paddle provides all customer service inquiries and handles returns for TEN ELEVEN TWELVE LLC services.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">6. Idea Similarity and Non-Exclusivity</h3>
            
            <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74] mb-4">
              <h4 className="font-medium text-[#4A7C74] mb-2">Plain English Summary</h4>
              <p className="text-sm text-[#2F2F2F]">
                You own your ideas, and we don't claim them. But please understand that other users may submit similar ideas, 
                and we cannot promise exclusivity or enforce originality across submissions. We protect your privacy, not your concept's uniqueness.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#4A7C74]">Intellectual Property Ownership</h4>
              <p className="text-[#2F2F2F]">
                Any business ideas, product concepts, or other intellectual property submitted by users — whether in written form, 
                project briefs, or through tool inputs — remain the sole property of the user. PivotReady makes no claim of ownership 
                over such intellectual property and agrees not to use or share such submissions beyond the scope of service delivery 
                without express written consent.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#4A7C74]">Idea Similarity Disclaimer</h4>
              <p className="text-[#2F2F2F]">
                While PivotReady respects the ownership of user-submitted content and ideas, users acknowledge that multiple 
                individuals may submit similar or overlapping ideas independently. PivotReady does not monitor for, adjudicate, 
                or guarantee the uniqueness of any submitted content. By using the service, you agree that PivotReady shall not 
                be held liable for coincidental or independently developed similarities between your submissions and those of others.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-[#4A7C74]">Dormant Accounts and Submitted Ideas</h4>
              <p className="text-[#2F2F2F]">
                PivotReady does not claim ownership of or reuse user-submitted ideas or content, even if an account becomes inactive 
                or the user discontinues service. Unless the user explicitly releases the idea to the public domain or grants written 
                consent, all ideas remain confidential and are treated as the intellectual property of the originating user.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">7. User Content and Ownership</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Users retain ownership of any content they upload to TEN ELEVEN TWELVE LLC and any downloadable output generated by the tools</li>
              <li>You grant TEN ELEVEN TWELVE LLC the right to use, store, and process your content solely to provide the services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">8. Intellectual Property</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>All content, logos, and trademarks on the website remain the property of TEN ELEVEN TWELVE LLC unless otherwise stated</li>
              <li>Users may not copy, modify, distribute, or reproduce any part of TEN ELEVEN TWELVE LLC's website or services without prior written consent from TEN ELEVEN TWELVE LLC</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">9. Limitations of Liability</h3>
            <p className="text-[#2F2F2F] mb-3">TEN ELEVEN TWELVE LLC is not liable for:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Errors or interruptions in the services</li>
              <li>Losses or damages caused by unauthorized access to your account</li>
              <li>Any indirect, incidental, or consequential damages arising from your use of the services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">10. Prohibited Activities</h3>
            <p className="text-[#2F2F2F] mb-3">Users are prohibited from:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Engaging in unlawful acts</li>
              <li>Hacking, sharing accounts, or infringing on copyrights</li>
              <li>Causing any damage to the website, tools, or services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">11. Termination</h3>
            <p className="text-[#2F2F2F] mb-3">PivotReady reserves the right to terminate or suspend your account without prior notice if you:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Violate these Terms and Conditions</li>
              <li>Engage in unlawful activities or cause damage to the website, tools, or services</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">12. Third-Party Services</h3>
            <p className="text-[#2F2F2F]">
              TEN ELEVEN TWELVE LLC uses integrations with OpenAI and Anthropic to provide certain features of TEN ELEVEN TWELVE LLC's services. 
              While TEN ELEVEN TWELVE LLC strives to maintain seamless integrations, TEN ELEVEN TWELVE LLC is not responsible for outages, disruptions, 
              or limitations caused by these third-party providers.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">13. Governing Law & Dispute Resolution</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>These Terms and Conditions between you and TEN ELEVEN TWELVE LLC are governed by the laws of the State of Texas, USA</li>
              <li>Disputes between you and TEN ELEVEN TWELVE LLC will be resolved through arbitration, mediation, or local courts in the State of Texas, USA</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">14. Amendments</h3>
            <p className="text-[#2F2F2F]">
              TEN ELEVEN TWELVE LLC reserves the right to update or modify these Terms and Conditions at any time. 
              Changes will be effective upon posting on this page. Continued use of TEN ELEVEN TWELVE LLC's services constitutes 
              your acceptance of the updated terms.
            </p>
          </section>

          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <p className="text-sm text-[#2F2F2F]">
              For any questions or concerns, please contact us at{' '}
              <a href="mailto:support@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                support@pivotready.co
              </a>
            </p>
          </div>
        </div>
      )
    },
    privacy: {
      title: 'Privacy Policy',
      icon: Eye,
      content: (
        <div className="space-y-6">
          <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74]">
            <p className="text-sm text-[#2F2F2F]">
              <strong>Effective Date:</strong> May 2025 | <strong>Last Updated:</strong> May 2025
            </p>
            <p className="text-sm text-[#2F2F2F] mt-2">
              TEN ELEVEN TWELVE LLC is committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, and process your personal data in compliance with U.S. laws and GDPR.
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">1. Data We Collect</h3>
            <p className="text-[#2F2F2F] mb-3">TEN ELEVEN TWELVE LLC collects the following personal data from users:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Personal Information:</strong> Name, email address, and physical address</li>
              <li><strong>Payment Information:</strong> Collected and processed by our third-party payment processor (Paddle)</li>
              <li><strong>Usage Data:</strong> Information collected via cookies, analytics tools, and user interactions with our forms and services</li>
              <li><strong>Uploaded Data:</strong> Files and content directly uploaded by users for service delivery</li>
            </ul>
            <p className="text-[#2F2F2F] mt-3">
              TEN ELEVEN TWELVE LLC does not process or collect sensitive data such as health information or ethnic details.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">2. How We Collect Data</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Direct Input:</strong> Through forms completed by users</li>
              <li><strong>Cookies and Tracking Tools:</strong> To enhance user experience and analyze website performance</li>
              <li><strong>Third-Party Services:</strong> Data collected via Paddle (payment processing), OpenAI, and Anthropic (for ChatBOT features and automated document creation)</li>
              <li><strong>User Uploads:</strong> Data uploaded by users for personal or company use</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">3. Purpose of Data Collection</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>To provide TEN ELEVEN TWELVE LLC's services, including ChatBOT functionality and document creation</li>
              <li>To process payments and manage TEN ELEVEN TWELVE LLC subscriptions</li>
              <li>To improve and optimize TEN ELEVEN TWELVE LLC's website and tools</li>
              <li>For marketing purposes (with your consent)</li>
              <li>To comply with legal obligations</li>
            </ul>
            <div className="bg-gray-50 p-4 rounded-lg mt-4">
              <h4 className="font-medium text-[#4A7C74] mb-2">Automated Document Creation and ChatBOT Training</h4>
              <p className="text-sm text-[#2F2F2F]">
                Some data is used for automated document creation and personalized ChatBOT training. 
                This data is exclusively accessible to the individual user or company account and is not 
                shared with other users or ChatBOTs.
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">4. Data Sharing</h3>
            <p className="text-[#2F2F2F] mb-3">TEN ELEVEN TWELVE LLC shares data with the following third parties:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Paddle:</strong> For payment processing</li>
              <li><strong>OpenAI and Anthropic:</strong> To power TEN ELEVEN TWELVE LLC's ChatBOT features and training</li>
            </ul>
            <p className="text-[#2F2F2F] mt-3">
              TEN ELEVEN TWELVE LLC does not transfer personal data internationally or share it for external purposes. 
              However, users may access their own data from any location.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">5. Your Rights Under GDPR</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Access:</strong> You can request a copy of your personal data</li>
              <li><strong>Rectification:</strong> You can correct any inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> You can delete your data using the built-in delete functions in our tools</li>
              <li><strong>Restriction:</strong> You can request limited processing of your data</li>
              <li><strong>Data Portability:</strong> You can request your data in a portable format</li>
            </ul>
            <p className="text-[#2F2F2F] mt-3">
              For any requests, contact us at{' '}
              <a href="mailto:privacy@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                privacy@pivotready.co
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">6. Data Retention</h3>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>We retain user data for 120 days after the end of a subscription</li>
              <li>Upon user request, data may be deleted sooner</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">7. Data Security</h3>
            <p className="text-[#2F2F2F] mb-3">We implement robust security measures to protect your data, including:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Encryption:</strong> To secure data during transmission</li>
              <li><strong>Secure Servers:</strong> For data storage and management</li>
              <li><strong>Payment Security:</strong> All payment information is handled securely by Paddle</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">8. Children's Privacy</h3>
            <p className="text-[#2F2F2F]">
              While PivotReady services are open to users of all ages, we do not knowingly collect data from 
              children under the age of 13 in the U.S. or 16 in the EU. If you believe a child has provided us 
              with personal data, please contact us at{' '}
              <a href="mailto:privacy@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                privacy@pivotready.co
              </a>
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">9. International Data Transfers</h3>
            <p className="text-[#2F2F2F]">
              We use Standard Contractual Clauses (SCCs) and other appropriate safeguards to ensure the 
              lawful transfer of data from the EU to the U.S.
            </p>
          </section>

          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <h4 className="font-medium text-[#4A7C74] mb-2">Contact Information</h4>
            <p className="text-sm text-[#2F2F2F]">
              For any questions or concerns about this Privacy Policy or data protection, please contact us at{' '}
              <a href="mailto:privacy@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                privacy@pivotready.co
              </a>
            </p>
            <p className="text-sm text-[#2F2F2F] mt-1">
              We have appointed a Data Protection Officer (DPO) to oversee GDPR compliance.
            </p>
          </div>
        </div>
      )
    },
    cookies: {
      title: 'Cookie Policy',
      icon: Cookie,
      content: (
        <div className="space-y-6">
          <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74]">
            <p className="text-sm text-[#2F2F2F]">
              This Cookie Policy explains how TEN ELEVEN TWELVE LLC uses cookies and similar technologies on our website.
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">What Are Cookies?</h3>
            <p className="text-[#2F2F2F]">
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Types of Cookies We Use</h3>
            
            <div className="grid gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-[#4A7C74] mb-2">Essential Cookies (Always Active)</h4>
                <p className="text-sm text-[#2F2F2F] mb-2">
                  These cookies are necessary for the website to function properly and cannot be disabled.
                </p>
                <ul className="text-sm text-[#2F2F2F] space-y-1">
                  <li>• Website navigation and basic functionality</li>
                  <li>• Form submissions and user authentication</li>
                  <li>• Security features and fraud prevention</li>
                  <li>• Cookie consent preferences</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-[#4A7C74] mb-2">Performance Cookies (Optional)</h4>
                <p className="text-sm text-[#2F2F2F] mb-2">
                  These cookies help us understand how visitors interact with our website.
                </p>
                <ul className="text-sm text-[#2F2F2F] space-y-1">
                  <li>• Google Analytics for website performance analysis</li>
                  <li>• Page load times and error tracking</li>
                  <li>• User behavior and interaction patterns</li>
                  <li>• A/B testing and optimization</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-[#4A7C74] mb-2">Marketing Cookies (Optional)</h4>
                <p className="text-sm text-[#2F2F2F] mb-2">
                  These cookies are used to deliver relevant advertisements and track marketing effectiveness.
                </p>
                <ul className="text-sm text-[#2F2F2F] space-y-1">
                  <li>• Social media integration and sharing</li>
                  <li>• Targeted advertising and retargeting</li>
                  <li>• Campaign tracking and attribution</li>
                  <li>• Cross-platform user identification</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Managing Your Cookie Preferences</h3>
            <p className="text-[#2F2F2F] mb-3">You can control your cookie preferences in several ways:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li>Use our cookie banner when you first visit the site</li>
              <li>Click "Cookie Preferences" in the footer at any time</li>
              <li>Adjust your browser settings to block or delete cookies</li>
              <li>Use browser extensions for enhanced privacy control</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Third-Party Cookies</h3>
            <p className="text-[#2F2F2F] mb-3">We may use third-party services that set their own cookies:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Google Analytics:</strong> For website performance analysis</li>
              <li><strong>Paddle:</strong> For payment processing and fraud prevention</li>
              <li><strong>Social Media Platforms:</strong> For content sharing and integration</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Cookie Retention</h3>
            <p className="text-[#2F2F2F]">
              Your cookie preferences are stored for 24 hours. After this period, you may be asked to 
              confirm your preferences again. This ensures you always have control over your privacy settings.
            </p>
          </section>

          <div className="bg-gray-50 p-4 rounded-lg mt-8">
            <p className="text-sm text-[#2F2F2F]">
              For questions about our cookie policy, please contact us at{' '}
              <a href="mailto:privacy@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                privacy@pivotready.co
              </a>
            </p>
          </div>
        </div>
      )
    },
    gdpr: {
      title: 'GDPR Rights',
      icon: Shield,
      content: (
        <div className="space-y-6">
          <div className="bg-[#EDF6F9] p-4 rounded-lg border-l-4 border-[#4A7C74]">
            <p className="text-sm text-[#2F2F2F]">
              Under the General Data Protection Regulation (GDPR), you have comprehensive rights regarding 
              your personal data. This section explains these rights and how to exercise them.
            </p>
          </div>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Your Data Protection Rights</h3>
            
            <div className="grid gap-4">
              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Eye className="w-6 h-6 text-[#4A7C74] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2F2F2F] mb-2">Right of Access (Article 15)</h4>
                  <p className="text-sm text-[#2F2F2F]">
                    You have the right to request information about what personal data we hold about you, 
                    how it's processed, and receive a copy of your data.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <FileText className="w-6 h-6 text-[#4A7C74] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2F2F2F] mb-2">Right of Rectification (Article 16)</h4>
                  <p className="text-sm text-[#2F2F2F]">
                    You have the right to request correction of inaccurate or incomplete personal data 
                    without undue delay.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Shield className="w-6 h-6 text-[#4A7C74] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2F2F2F] mb-2">Right of Erasure (Article 17)</h4>
                  <p className="text-sm text-[#2F2F2F]">
                    Also known as the "right to be forgotten," you can request deletion of your personal 
                    data under certain circumstances.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <Download className="w-6 h-6 text-[#4A7C74] mt-1" />
                <div>
                  <h4 className="font-medium text-[#2F2F2F] mb-2">Right of Data Portability (Article 20)</h4>
                  <p className="text-sm text-[#2F2F2F]">
                    You have the right to receive your personal data in a structured, commonly used, 
                    and machine-readable format.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">How to Exercise Your Rights</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-[#4A7C74] mb-3">To make a request:</h4>
              <ol className="list-decimal list-inside text-sm text-[#2F2F2F] space-y-2">
                <li>Send an email to privacy@pivotready.co with your request</li>
                <li>Include your full name, email address, and specific details of your request</li>
                <li>Provide proof of identity for security purposes</li>
                <li>We will respond within 30 days (may be extended to 60 days for complex requests)</li>
              </ol>
            </div>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Legal Basis for Processing</h3>
            <p className="text-[#2F2F2F] mb-3">We process your personal data based on:</p>
            <ul className="list-disc list-inside text-[#2F2F2F] space-y-1 ml-4">
              <li><strong>Consent:</strong> For marketing communications and optional cookies</li>
              <li><strong>Contract Performance:</strong> To provide our services and process payments</li>
              <li><strong>Legitimate Interest:</strong> For website analytics and security</li>
              <li><strong>Legal Obligation:</strong> For compliance with applicable laws</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl font-semibold text-[#4A7C74]">Filing a Complaint</h3>
            <p className="text-[#2F2F2F]">
              If you believe your data protection rights have been violated, you have the right to lodge 
              a complaint with your local data protection supervisory authority. You can also contact us 
              directly to resolve any concerns.
            </p>
          </section>

          <div className="bg-[#EDF6F9] p-4 rounded-lg mt-8">
            <h4 className="font-medium text-[#4A7C74] mb-2">Data Protection Officer</h4>
            <p className="text-sm text-[#2F2F2F] mb-2">
              We have appointed a Data Protection Officer to ensure GDPR compliance and handle your requests.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-[#4A7C74]" />
              <span className="text-[#2F2F2F]">privacy@pivotready.co</span>
            </div>
          </div>
        </div>
      )
    }
  };

  return (
    <div className="min-h-screen bg-[#F2E5D7] py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4 text-[#4A7C74] hover:bg-[#4A7C74] hover:text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#4A7C74] mb-2">Legal Information</h1>
          <p className="text-lg text-[#2F2F2F]">
            Terms, privacy policy, and your rights under GDPR
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="flex flex-wrap">
              {Object.entries(tabs).map(([key, tab]) => {
                const IconComponent = tab.icon;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`flex items-center space-x-2 px-4 md:px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                      activeTab === key
                        ? 'border-[#4A7C74] text-[#4A7C74] bg-[#EDF6F9]'
                        : 'border-transparent text-gray-600 hover:text-[#4A7C74] hover:border-gray-300'
                    }`}
                  >
                    <IconComponent className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h2 className="text-2xl font-bold text-[#4A7C74] mb-6">
              {tabs[activeTab as keyof typeof tabs].title}
            </h2>
            {tabs[activeTab as keyof typeof tabs].content}
          </div>

          {/* Footer */}
          <div className="bg-gray-50 p-6 border-t border-gray-200">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-gray-600">
                Last updated: {new Date().toLocaleDateString()} | 
                Questions? Contact us at{' '}
                <a href="mailto:privacy@pivotready.co" target="_blank" rel="noopener noreferrer" className="text-[#4A7C74] hover:underline">
                  privacy@pivotready.co
                </a>
              </p>
              <div className="flex space-x-2">
                <Button
                  onClick={() => window.print()}
                  variant="outline"
                  size="sm"
                  className="text-[#4A7C74] border-[#4A7C74] hover:bg-[#4A7C74] hover:text-white"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button
                  onClick={() => window.open('mailto:privacy@pivotready.co?subject=Legal Inquiry', '_blank')}
                  size="sm"
                  className="bg-[#4A7C74] hover:bg-opacity-90 text-white"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;