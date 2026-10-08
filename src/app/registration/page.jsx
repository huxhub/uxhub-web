import TrialRegistration from "@/components/TrialRegistration";
import StructuredData from "@/components/StructuredData";
import { metadataFor, pageSchemas } from "@/lib/seo";

export const metadata = metadataFor("registration");

export default function RegistrationPage() {
  return (
    <>
      <StructuredData data={pageSchemas("registration")} />
      <TrialRegistration />
    </>
  );
}
