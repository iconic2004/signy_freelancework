import { COMPANY_INFO } from "@/lib/constants";

export const metadata = {
  title: "Cancellation and Refund Policy | Signy Solutions",
  description: "Signy Solutions cancellation terms, refund eligibility criteria, review windows, and dispute resolution guidelines.",
};

export default function CancellationRefundPolicyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          <div>
            <span className="badge-teal mb-4">Policy Statement</span>
            <h1 className="signy-page-title">
              Cancellation and Refund Policy
            </h1>
            <p className="text-sm text-slate-500 mt-3">
              Signy Solutions India Pvt Ltd • Last Revised: October 2026
            </p>
          </div>

          <div className="prose prose-slate max-w-none text-slate-600 space-y-6 text-sm sm:text-base leading-relaxed">
            <p>
              At Signy, we are committed to delivering high-quality digital communication services. We recognize that circumstances may require the cancellation of an order or a request for a refund. This policy outlines the terms under which cancellations and refunds are handled.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              General Cancellation Policy
            </h2>
            <p>
              <strong>Cancellation by the Client:</strong> Clients may cancel a service by providing written notice to our support team at least 30 days before the next billing cycle for recurring services such as website maintenance, SEO, or digital marketing.
            </p>
            <p>
              For one-time services (e.g., Bulk SMS, Voice Call, RCS, WhatsApp Business API credits), cancellation requests must be submitted before the service is fully rendered or message batches dispatched. Once the service has been initiated or completed, cancellations are not permitted.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Cancellation by Signy
            </h2>
            <p>
              We reserve the right to cancel any service at our discretion, particularly in cases of non-payment, misuse of messaging routes, DLT non-compliance, or violation of our terms and conditions. In such instances, no refund will be issued.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Refund Policy
            </h2>
            <p>
              <strong>Eligibility for Refunds:</strong> Refunds are considered only for pre-paid services that have not yet been rendered.
            </p>
            <p>
              For ongoing services (e.g., SEO, digital marketing), a prorated refund may be issued if the service is canceled before the end of the billing cycle and no work has been started for that period.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Non-Refundable Services
            </h2>
            <p>
              No refunds will be provided for services that have already been rendered or for work that has commenced.
            </p>
            <p>
              One-time services such as Bulk SMS, Voice Call, RCS, and WhatsApp Business API message consumptions are strictly non-refundable once dispatched to carrier networks.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Refund Request Process
            </h2>
            <p>
              To request a refund, clients must submit a written request to our support team within 7 days of the payment date. The request should include the reason for the refund and any relevant documentation.
            </p>
            <p>
              Refund requests will be reviewed and processed within 14 business days. Approved refunds will be issued to the original payment method.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Disputes and Chargebacks
            </h2>
            <p>
              We strongly encourage clients to contact our support team at <a href={COMPANY_INFO.emailHref} className="text-[#4ABFAD] underline">{COMPANY_INFO.email}</a> to resolve any issues before initiating a dispute or chargeback with their payment provider. Filing a chargeback or dispute without first contacting our team is considered a violation of this policy and may result in service termination.
            </p>

            <h2 className="signy-subsection-heading pt-4 border-t border-slate-100">
              Contact Information
            </h2>
            <p>
              For questions or concerns regarding this Cancellation and Refund Policy, please contact our support team at:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Phone: {COMPANY_INFO.phone}</li>
              <li>Email: {COMPANY_INFO.email}</li>
              <li>Address: {COMPANY_INFO.address}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
