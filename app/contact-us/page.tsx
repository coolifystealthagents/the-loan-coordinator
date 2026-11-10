import type {Metadata} from "next";
import ContactShell from "@/components/ContactShell";
import LeadForm from "@/components/LeadForm";

export const metadata:Metadata={title:"Contact Us",description:"Tell us which pipeline, document, borrower communication, or closing tasks need more coordination.",alternates:{canonical:"https://theloancoordinator.com/contact-us"}};
export default function ContactPage(){return <ContactShell brand={"The Loan Coordinator"} title={"Keep your loan workflow moving."} intro={"Tell us which pipeline, document, borrower communication, or closing tasks need more coordination."} preparation={["Pipeline stages and recurring file tasks", "Approved loan systems and milestone dates", "Licensed review and escalation owners"]} boundary={"Licensed professionals retain origination, underwriting, lending advice, approvals and all funds-related decisions."} calendar={"https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1"}><LeadForm source="contact-page-consultation"/></ContactShell>}
