export type October12Research={slug:string;title:string;category:string;excerpt:string;publishedAt:string;visibleDate:string;thumbnail:string;readingMinutes:number;thesis:string;questions:string[];sections:{heading:string;paragraphs:string[]}[];sources:{label:string;url:string}[];related:string[]};
export const october12Research:October12Research[]=[
  {
    "slug": "measuring-pipeline-aging-with-stage-exit-evidence",
    "title": "Measuring Pipeline Aging with Stage Exit Evidence",
    "category": "Pipeline measurement",
    "excerpt": "A reproducible method for measuring stage age from documented entry and exit evidence instead of self-reported pipeline labels.",
    "publishedAt": "2026-10-12",
    "visibleDate": "October 12, 2026",
    "thumbnail": "/thumbnails/october-12/measuring-pipeline-aging-with-stage-exit-evidence.svg",
    "readingMinutes": 14,
    "thesis": "A stage-age measure is useful only when its clock begins and ends at events the team can retrieve.",
    "questions": [
      "Which event starts each stage clock?",
      "What evidence closes that clock?",
      "How are pauses and returned files classified?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "A reproducible method for measuring stage age from documented entry and exit evidence instead of self-reported pipeline labels. The unit of analysis is an operational record, not a borrower outcome or a forecast of loan performance.",
          "A stage-age measure is useful only when its clock begins and ends at events the team can retrieve. The review asks whether stage age evidence can be reconstructed by an authorized reviewer from retained events, owners, and evidence."
        ]
      },
      {
        "heading": "Source review protocol",
        "paragraphs": [
          "The stage age evidence source set combines federal rules, regulator guidance, government program material, enterprise guidance, and security references. Sources establish context and boundaries; they do not supply an invented benchmark.",
          "For stage age evidence, each source is logged by publisher, page title, secure URL, relevance, and review date. If guidance changes, the affected mapping must be reviewed before the control is treated as current."
        ]
      },
      {
        "heading": "Sampling and measurement method",
        "paragraphs": [
          "This study uses an event-ledger sample, calculates elapsed time only between verified timestamps, and reports missing evidence as a separate result. The sample should span different owners and stages, exclude unnecessary personal information, and preserve a repeatable selection note.",
          "For each stage age evidence record, the reviewer marks ownership, input readiness, exception visibility, decision routing, and completion evidence as present, absent, or not applicable. Free-text observations explain every exception."
        ]
      },
      {
        "heading": "Data dictionary and evidence rules",
        "paragraphs": [
          "Define every stage age evidence field before sampling. The dictionary should state its business meaning, acceptable source, responsible owner, valid states, timestamp rule, and treatment of missing or conflicting evidence. Reviewers should not create definitions after seeing results.",
          "For stage age evidence, evidence is acceptable when an authorized reviewer can retrieve it, connect it to the sampled record, and understand the event it supports. A copied status label without a source event is not equivalent to evidence. A link that the reviewer cannot access is recorded as unavailable, not present.",
          "Use a separate reason code for not applicable. That designation requires a documented rule explaining why the checkpoint does not apply to the selected workflow. It must not become a convenient substitute for missing stage age evidence evidence."
        ]
      },
      {
        "heading": "Quality assurance and reviewer calibration",
        "paragraphs": [
          "Before the full stage age evidence review, two reviewers should independently score a small calibration set. They then compare disagreements, refine ambiguous definitions, and repeat the exercise. Preserve the decisions so later reviewers apply the same interpretation.",
          "Recheck a portion of completed stage age evidence observations against the original evidence. The quality check should test selection, field accuracy, source retrieval, and reason-code use. Correct both the reported result and the underlying process when an error is confirmed.",
          "For stage age evidence, do not allow the person who operates a sampled queue to be the only reviewer of its evidence. Operational context is valuable, but an independent check reduces the chance that familiar workarounds will be treated as documented controls."
        ]
      },
      {
        "heading": "Interpretation of findings",
        "paragraphs": [
          "Report stage age evidence counts and denominators together. A missing field indicates a documentation gap in the sampled workflow, not proof that the underlying action never occurred. A present field is checked for traceability before it is accepted.",
          "Segment results by workflow stage and exception type. That separation helps leaders distinguish a training issue from a system design problem while avoiding unsupported causal claims about stage age evidence.",
          "Present uncertainty next to the stage age evidence result. Note unavailable records, selection constraints, system migrations, and any definitions changed during calibration. If the sample is small or non-random, describe the observed records and avoid projecting the rate across the entire portfolio."
        ]
      },
      {
        "heading": "Remediation design",
        "paragraphs": [
          "Translate each confirmed stage age evidence gap into a control change with an owner, due date, verification method, and dependency. A training reminder may address incorrect use of an existing field; recurring missing evidence may require a system rule, revised handoff, or clearer authority.",
          "Prioritize stage age evidence remediation by exposure and recurrence rather than by how easy the fix appears. Test the changed workflow with a small case set before broad release. Document the approved change, communicate it to affected roles, and keep a rollback path for unexpected operational effects."
        ]
      },
      {
        "heading": "Limits and responsible use",
        "paragraphs": [
          "This stage age evidence editorial study does not provide legal, tax, credit, underwriting, compliance, or financial advice. It does not evaluate protected borrower characteristics, determine eligibility, or replace review by qualified professionals.",
          "The stage age evidence method describes control evidence at a point in time. Small samples, changing requirements, inconsistent system history, and unavailable records can limit generalization. Retain the sampling note so later reviewers can reproduce or challenge the result."
        ]
      },
      {
        "heading": "Implementation path",
        "paragraphs": [
          "Start the stage age evidence review with a dry run using de-identified or synthetic records. Resolve unclear definitions, confirm that reviewers can retrieve cited evidence, and establish who may correct the source system.",
          "Publish a stage age evidence findings memo containing scope, sample, results, exceptions, limitations, and assigned remediation. Re-test the same control after changes and preserve both rounds so improvement claims have inspectable support."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Mortgage resources",
        "url": "https://www.consumerfinance.gov/consumer-tools/mortgages/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage rules",
        "url": "https://www.consumerfinance.gov/rules-policy/final-rules/"
      },
      {
        "label": "Electronic Code of Federal Regulations, Regulation Z",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
      },
      {
        "label": "Electronic Code of Federal Regulations, Regulation X",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1024"
      },
      {
        "label": "HUD, housing counseling and mortgage resources",
        "url": "https://www.hud.gov/housing-counseling"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Fannie Mae Servicing Guide",
        "url": "https://servicing-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Federal Trade Commission, Gramm-Leach-Bliley Act",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
      },
      {
        "label": "National Institute of Standards and Technology, access control",
        "url": "https://csrc.nist.gov/projects/role-based-access-control"
      }
    ],
    "related": [
      "evidence-framework-for-borrower-document-completeness",
      "audit-method-for-condition-queue-reliability",
      "research-brief-on-closing-readiness-signals"
    ]
  },
  {
    "slug": "source-based-study-of-mortgage-disclosure-timing-controls",
    "title": "Source-Based Study of Mortgage Disclosure Timing Controls",
    "category": "Disclosure controls",
    "excerpt": "A source-led review of how event logs, receipt evidence, and escalation ownership support operational control around mortgage disclosure timing.",
    "publishedAt": "2026-10-12",
    "visibleDate": "October 12, 2026",
    "thumbnail": "/thumbnails/october-12/source-based-study-of-mortgage-disclosure-timing-controls.svg",
    "readingMinutes": 14,
    "thesis": "Operational staff can preserve reliable timing evidence without making the legal conclusion reserved for compliance counsel.",
    "questions": [
      "Which release event is recorded?",
      "How is receipt evidence retained?",
      "Who reviews changes that may alter timing?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "A source-led review of how event logs, receipt evidence, and escalation ownership support operational control around mortgage disclosure timing. The unit of analysis is an operational record, not a borrower outcome or a forecast of loan performance.",
          "Operational staff can preserve reliable timing evidence without making the legal conclusion reserved for compliance counsel. The review asks whether disclosure event controls can be reconstructed by an authorized reviewer from retained events, owners, and evidence."
        ]
      },
      {
        "heading": "Source review protocol",
        "paragraphs": [
          "The disclosure event controls source set combines federal rules, regulator guidance, government program material, enterprise guidance, and security references. Sources establish context and boundaries; they do not supply an invented benchmark.",
          "For disclosure event controls, each source is logged by publisher, page title, secure URL, relevance, and review date. If guidance changes, the affected mapping must be reviewed before the control is treated as current."
        ]
      },
      {
        "heading": "Sampling and measurement method",
        "paragraphs": [
          "The method maps official requirements to observable workflow fields, then tests whether a reviewer could reconstruct the sequence without relying on memory. The sample should span different owners and stages, exclude unnecessary personal information, and preserve a repeatable selection note.",
          "For each disclosure event controls record, the reviewer marks ownership, input readiness, exception visibility, decision routing, and completion evidence as present, absent, or not applicable. Free-text observations explain every exception."
        ]
      },
      {
        "heading": "Data dictionary and evidence rules",
        "paragraphs": [
          "Define every disclosure event controls field before sampling. The dictionary should state its business meaning, acceptable source, responsible owner, valid states, timestamp rule, and treatment of missing or conflicting evidence. Reviewers should not create definitions after seeing results.",
          "For disclosure event controls, evidence is acceptable when an authorized reviewer can retrieve it, connect it to the sampled record, and understand the event it supports. A copied status label without a source event is not equivalent to evidence. A link that the reviewer cannot access is recorded as unavailable, not present.",
          "Use a separate reason code for not applicable. That designation requires a documented rule explaining why the checkpoint does not apply to the selected workflow. It must not become a convenient substitute for missing disclosure event controls evidence."
        ]
      },
      {
        "heading": "Quality assurance and reviewer calibration",
        "paragraphs": [
          "Before the full disclosure event controls review, two reviewers should independently score a small calibration set. They then compare disagreements, refine ambiguous definitions, and repeat the exercise. Preserve the decisions so later reviewers apply the same interpretation.",
          "Recheck a portion of completed disclosure event controls observations against the original evidence. The quality check should test selection, field accuracy, source retrieval, and reason-code use. Correct both the reported result and the underlying process when an error is confirmed.",
          "For disclosure event controls, do not allow the person who operates a sampled queue to be the only reviewer of its evidence. Operational context is valuable, but an independent check reduces the chance that familiar workarounds will be treated as documented controls."
        ]
      },
      {
        "heading": "Interpretation of findings",
        "paragraphs": [
          "Report disclosure event controls counts and denominators together. A missing field indicates a documentation gap in the sampled workflow, not proof that the underlying action never occurred. A present field is checked for traceability before it is accepted.",
          "Segment results by workflow stage and exception type. That separation helps leaders distinguish a training issue from a system design problem while avoiding unsupported causal claims about disclosure event controls.",
          "Present uncertainty next to the disclosure event controls result. Note unavailable records, selection constraints, system migrations, and any definitions changed during calibration. If the sample is small or non-random, describe the observed records and avoid projecting the rate across the entire portfolio."
        ]
      },
      {
        "heading": "Remediation design",
        "paragraphs": [
          "Translate each confirmed disclosure event controls gap into a control change with an owner, due date, verification method, and dependency. A training reminder may address incorrect use of an existing field; recurring missing evidence may require a system rule, revised handoff, or clearer authority.",
          "Prioritize disclosure event controls remediation by exposure and recurrence rather than by how easy the fix appears. Test the changed workflow with a small case set before broad release. Document the approved change, communicate it to affected roles, and keep a rollback path for unexpected operational effects."
        ]
      },
      {
        "heading": "Limits and responsible use",
        "paragraphs": [
          "This disclosure event controls editorial study does not provide legal, tax, credit, underwriting, compliance, or financial advice. It does not evaluate protected borrower characteristics, determine eligibility, or replace review by qualified professionals.",
          "The disclosure event controls method describes control evidence at a point in time. Small samples, changing requirements, inconsistent system history, and unavailable records can limit generalization. Retain the sampling note so later reviewers can reproduce or challenge the result."
        ]
      },
      {
        "heading": "Implementation path",
        "paragraphs": [
          "Start the disclosure event controls review with a dry run using de-identified or synthetic records. Resolve unclear definitions, confirm that reviewers can retrieve cited evidence, and establish who may correct the source system.",
          "Publish a disclosure event controls findings memo containing scope, sample, results, exceptions, limitations, and assigned remediation. Re-test the same control after changes and preserve both rounds so improvement claims have inspectable support."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, mortgage rules",
        "url": "https://www.consumerfinance.gov/rules-policy/final-rules/"
      },
      {
        "label": "Electronic Code of Federal Regulations, Regulation Z",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
      },
      {
        "label": "Electronic Code of Federal Regulations, Regulation X",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1024"
      },
      {
        "label": "HUD, housing counseling and mortgage resources",
        "url": "https://www.hud.gov/housing-counseling"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Fannie Mae Servicing Guide",
        "url": "https://servicing-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Federal Trade Commission, Gramm-Leach-Bliley Act",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
      },
      {
        "label": "National Institute of Standards and Technology, access control",
        "url": "https://csrc.nist.gov/projects/role-based-access-control"
      },
      {
        "label": "Federal Reserve, consumer compliance resources",
        "url": "https://www.federalreserve.gov/supervisionreg/caletters/caltr.htm"
      }
    ],
    "related": [
      "measuring-pipeline-aging-with-stage-exit-evidence",
      "evidence-framework-for-borrower-document-completeness",
      "audit-method-for-condition-queue-reliability",
      "research-brief-on-closing-readiness-signals"
    ]
  },
  {
    "slug": "evidence-framework-for-borrower-document-completeness",
    "title": "Evidence Framework for Borrower Document Completeness",
    "category": "Document evidence",
    "excerpt": "A practical research framework for distinguishing requested, received, readable, current, and reviewer-accepted borrower documents.",
    "publishedAt": "2026-10-12",
    "visibleDate": "October 12, 2026",
    "thumbnail": "/thumbnails/october-12/evidence-framework-for-borrower-document-completeness.svg",
    "readingMinutes": 14,
    "thesis": "Receipt is not completeness, and completeness is not approval; the record should preserve each state distinctly.",
    "questions": [
      "Can each request be traced to its source?",
      "Are defects recorded with reason codes?",
      "Is acceptance linked to an authorized reviewer?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "A practical research framework for distinguishing requested, received, readable, current, and reviewer-accepted borrower documents. The unit of analysis is an operational record, not a borrower outcome or a forecast of loan performance.",
          "Receipt is not completeness, and completeness is not approval; the record should preserve each state distinctly. The review asks whether document completeness evidence can be reconstructed by an authorized reviewer from retained events, owners, and evidence."
        ]
      },
      {
        "heading": "Source review protocol",
        "paragraphs": [
          "The document completeness evidence source set combines federal rules, regulator guidance, government program material, enterprise guidance, and security references. Sources establish context and boundaries; they do not supply an invented benchmark.",
          "For document completeness evidence, each source is logged by publisher, page title, secure URL, relevance, and review date. If guidance changes, the affected mapping must be reviewed before the control is treated as current."
        ]
      },
      {
        "heading": "Sampling and measurement method",
        "paragraphs": [
          "The framework samples document requests and follows each item through five custody states while excluding protected content from the reporting dataset. The sample should span different owners and stages, exclude unnecessary personal information, and preserve a repeatable selection note.",
          "For each document completeness evidence record, the reviewer marks ownership, input readiness, exception visibility, decision routing, and completion evidence as present, absent, or not applicable. Free-text observations explain every exception."
        ]
      },
      {
        "heading": "Data dictionary and evidence rules",
        "paragraphs": [
          "Define every document completeness evidence field before sampling. The dictionary should state its business meaning, acceptable source, responsible owner, valid states, timestamp rule, and treatment of missing or conflicting evidence. Reviewers should not create definitions after seeing results.",
          "For document completeness evidence, evidence is acceptable when an authorized reviewer can retrieve it, connect it to the sampled record, and understand the event it supports. A copied status label without a source event is not equivalent to evidence. A link that the reviewer cannot access is recorded as unavailable, not present.",
          "Use a separate reason code for not applicable. That designation requires a documented rule explaining why the checkpoint does not apply to the selected workflow. It must not become a convenient substitute for missing document completeness evidence evidence."
        ]
      },
      {
        "heading": "Quality assurance and reviewer calibration",
        "paragraphs": [
          "Before the full document completeness evidence review, two reviewers should independently score a small calibration set. They then compare disagreements, refine ambiguous definitions, and repeat the exercise. Preserve the decisions so later reviewers apply the same interpretation.",
          "Recheck a portion of completed document completeness evidence observations against the original evidence. The quality check should test selection, field accuracy, source retrieval, and reason-code use. Correct both the reported result and the underlying process when an error is confirmed.",
          "For document completeness evidence, do not allow the person who operates a sampled queue to be the only reviewer of its evidence. Operational context is valuable, but an independent check reduces the chance that familiar workarounds will be treated as documented controls."
        ]
      },
      {
        "heading": "Interpretation of findings",
        "paragraphs": [
          "Report document completeness evidence counts and denominators together. A missing field indicates a documentation gap in the sampled workflow, not proof that the underlying action never occurred. A present field is checked for traceability before it is accepted.",
          "Segment results by workflow stage and exception type. That separation helps leaders distinguish a training issue from a system design problem while avoiding unsupported causal claims about document completeness evidence.",
          "Present uncertainty next to the document completeness evidence result. Note unavailable records, selection constraints, system migrations, and any definitions changed during calibration. If the sample is small or non-random, describe the observed records and avoid projecting the rate across the entire portfolio."
        ]
      },
      {
        "heading": "Remediation design",
        "paragraphs": [
          "Translate each confirmed document completeness evidence gap into a control change with an owner, due date, verification method, and dependency. A training reminder may address incorrect use of an existing field; recurring missing evidence may require a system rule, revised handoff, or clearer authority.",
          "Prioritize document completeness evidence remediation by exposure and recurrence rather than by how easy the fix appears. Test the changed workflow with a small case set before broad release. Document the approved change, communicate it to affected roles, and keep a rollback path for unexpected operational effects."
        ]
      },
      {
        "heading": "Limits and responsible use",
        "paragraphs": [
          "This document completeness evidence editorial study does not provide legal, tax, credit, underwriting, compliance, or financial advice. It does not evaluate protected borrower characteristics, determine eligibility, or replace review by qualified professionals.",
          "The document completeness evidence method describes control evidence at a point in time. Small samples, changing requirements, inconsistent system history, and unavailable records can limit generalization. Retain the sampling note so later reviewers can reproduce or challenge the result."
        ]
      },
      {
        "heading": "Implementation path",
        "paragraphs": [
          "Start the document completeness evidence review with a dry run using de-identified or synthetic records. Resolve unclear definitions, confirm that reviewers can retrieve cited evidence, and establish who may correct the source system.",
          "Publish a document completeness evidence findings memo containing scope, sample, results, exceptions, limitations, and assigned remediation. Re-test the same control after changes and preserve both rounds so improvement claims have inspectable support."
        ]
      }
    ],
    "sources": [
      {
        "label": "Electronic Code of Federal Regulations, Regulation Z",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1026"
      },
      {
        "label": "Electronic Code of Federal Regulations, Regulation X",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1024"
      },
      {
        "label": "HUD, housing counseling and mortgage resources",
        "url": "https://www.hud.gov/housing-counseling"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Fannie Mae Servicing Guide",
        "url": "https://servicing-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Federal Trade Commission, Gramm-Leach-Bliley Act",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
      },
      {
        "label": "National Institute of Standards and Technology, access control",
        "url": "https://csrc.nist.gov/projects/role-based-access-control"
      },
      {
        "label": "Federal Reserve, consumer compliance resources",
        "url": "https://www.federalreserve.gov/supervisionreg/caletters/caltr.htm"
      },
      {
        "label": "Ginnie Mae MBS Guide",
        "url": "https://www.ginniemae.gov/issuers/program_guidelines/Pages/mbs_guide.aspx"
      }
    ],
    "related": [
      "measuring-pipeline-aging-with-stage-exit-evidence",
      "source-based-study-of-mortgage-disclosure-timing-controls",
      "audit-method-for-condition-queue-reliability",
      "research-brief-on-closing-readiness-signals"
    ]
  },
  {
    "slug": "audit-method-for-condition-queue-reliability",
    "title": "Audit Method for Condition Queue Reliability",
    "category": "Queue reliability",
    "excerpt": "An audit method for testing whether condition queues reflect real ownership, current outreach, decision boundaries, and verifiable closure.",
    "publishedAt": "2026-10-12",
    "visibleDate": "October 12, 2026",
    "thumbnail": "/thumbnails/october-12/audit-method-for-condition-queue-reliability.svg",
    "readingMinutes": 14,
    "thesis": "A queue is reliable when another authorized team member can understand the item and continue the work from its recorded evidence.",
    "questions": [
      "Does every open item have one owner?",
      "Is the latest contact visible?",
      "Does closure include reviewer evidence?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "An audit method for testing whether condition queues reflect real ownership, current outreach, decision boundaries, and verifiable closure. The unit of analysis is an operational record, not a borrower outcome or a forecast of loan performance.",
          "A queue is reliable when another authorized team member can understand the item and continue the work from its recorded evidence. The review asks whether condition queue reliability can be reconstructed by an authorized reviewer from retained events, owners, and evidence."
        ]
      },
      {
        "heading": "Source review protocol",
        "paragraphs": [
          "The condition queue reliability source set combines federal rules, regulator guidance, government program material, enterprise guidance, and security references. Sources establish context and boundaries; they do not supply an invented benchmark.",
          "For condition queue reliability, each source is logged by publisher, page title, secure URL, relevance, and review date. If guidance changes, the affected mapping must be reviewed before the control is treated as current."
        ]
      },
      {
        "heading": "Sampling and measurement method",
        "paragraphs": [
          "The audit selects open and recently closed conditions, checks required fields, traces a sample to source evidence, and records exceptions without inferring credit decisions. The sample should span different owners and stages, exclude unnecessary personal information, and preserve a repeatable selection note.",
          "For each condition queue reliability record, the reviewer marks ownership, input readiness, exception visibility, decision routing, and completion evidence as present, absent, or not applicable. Free-text observations explain every exception."
        ]
      },
      {
        "heading": "Data dictionary and evidence rules",
        "paragraphs": [
          "Define every condition queue reliability field before sampling. The dictionary should state its business meaning, acceptable source, responsible owner, valid states, timestamp rule, and treatment of missing or conflicting evidence. Reviewers should not create definitions after seeing results.",
          "For condition queue reliability, evidence is acceptable when an authorized reviewer can retrieve it, connect it to the sampled record, and understand the event it supports. A copied status label without a source event is not equivalent to evidence. A link that the reviewer cannot access is recorded as unavailable, not present.",
          "Use a separate reason code for not applicable. That designation requires a documented rule explaining why the checkpoint does not apply to the selected workflow. It must not become a convenient substitute for missing condition queue reliability evidence."
        ]
      },
      {
        "heading": "Quality assurance and reviewer calibration",
        "paragraphs": [
          "Before the full condition queue reliability review, two reviewers should independently score a small calibration set. They then compare disagreements, refine ambiguous definitions, and repeat the exercise. Preserve the decisions so later reviewers apply the same interpretation.",
          "Recheck a portion of completed condition queue reliability observations against the original evidence. The quality check should test selection, field accuracy, source retrieval, and reason-code use. Correct both the reported result and the underlying process when an error is confirmed.",
          "For condition queue reliability, do not allow the person who operates a sampled queue to be the only reviewer of its evidence. Operational context is valuable, but an independent check reduces the chance that familiar workarounds will be treated as documented controls."
        ]
      },
      {
        "heading": "Interpretation of findings",
        "paragraphs": [
          "Report condition queue reliability counts and denominators together. A missing field indicates a documentation gap in the sampled workflow, not proof that the underlying action never occurred. A present field is checked for traceability before it is accepted.",
          "Segment results by workflow stage and exception type. That separation helps leaders distinguish a training issue from a system design problem while avoiding unsupported causal claims about condition queue reliability.",
          "Present uncertainty next to the condition queue reliability result. Note unavailable records, selection constraints, system migrations, and any definitions changed during calibration. If the sample is small or non-random, describe the observed records and avoid projecting the rate across the entire portfolio."
        ]
      },
      {
        "heading": "Remediation design",
        "paragraphs": [
          "Translate each confirmed condition queue reliability gap into a control change with an owner, due date, verification method, and dependency. A training reminder may address incorrect use of an existing field; recurring missing evidence may require a system rule, revised handoff, or clearer authority.",
          "Prioritize condition queue reliability remediation by exposure and recurrence rather than by how easy the fix appears. Test the changed workflow with a small case set before broad release. Document the approved change, communicate it to affected roles, and keep a rollback path for unexpected operational effects."
        ]
      },
      {
        "heading": "Limits and responsible use",
        "paragraphs": [
          "This condition queue reliability editorial study does not provide legal, tax, credit, underwriting, compliance, or financial advice. It does not evaluate protected borrower characteristics, determine eligibility, or replace review by qualified professionals.",
          "The condition queue reliability method describes control evidence at a point in time. Small samples, changing requirements, inconsistent system history, and unavailable records can limit generalization. Retain the sampling note so later reviewers can reproduce or challenge the result."
        ]
      },
      {
        "heading": "Implementation path",
        "paragraphs": [
          "Start the condition queue reliability review with a dry run using de-identified or synthetic records. Resolve unclear definitions, confirm that reviewers can retrieve cited evidence, and establish who may correct the source system.",
          "Publish a condition queue reliability findings memo containing scope, sample, results, exceptions, limitations, and assigned remediation. Re-test the same control after changes and preserve both rounds so improvement claims have inspectable support."
        ]
      }
    ],
    "sources": [
      {
        "label": "Electronic Code of Federal Regulations, Regulation X",
        "url": "https://www.ecfr.gov/current/title-12/chapter-X/part-1024"
      },
      {
        "label": "HUD, housing counseling and mortgage resources",
        "url": "https://www.hud.gov/housing-counseling"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Fannie Mae Servicing Guide",
        "url": "https://servicing-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Federal Trade Commission, Gramm-Leach-Bliley Act",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
      },
      {
        "label": "National Institute of Standards and Technology, access control",
        "url": "https://csrc.nist.gov/projects/role-based-access-control"
      },
      {
        "label": "Federal Reserve, consumer compliance resources",
        "url": "https://www.federalreserve.gov/supervisionreg/caletters/caltr.htm"
      },
      {
        "label": "Ginnie Mae MBS Guide",
        "url": "https://www.ginniemae.gov/issuers/program_guidelines/Pages/mbs_guide.aspx"
      },
      {
        "label": "USDA Rural Development, lender resources",
        "url": "https://www.rd.usda.gov/resources/usda-linc-training-resource-library/loan-origination"
      }
    ],
    "related": [
      "measuring-pipeline-aging-with-stage-exit-evidence",
      "source-based-study-of-mortgage-disclosure-timing-controls",
      "evidence-framework-for-borrower-document-completeness",
      "research-brief-on-closing-readiness-signals"
    ]
  },
  {
    "slug": "research-brief-on-closing-readiness-signals",
    "title": "Research Brief on Closing Readiness Signals",
    "category": "Closing readiness",
    "excerpt": "A structured review of operational signals that indicate whether a file is organized for an authorized closing-readiness decision.",
    "publishedAt": "2026-10-12",
    "visibleDate": "October 12, 2026",
    "thumbnail": "/thumbnails/october-12/research-brief-on-closing-readiness-signals.svg",
    "readingMinutes": 14,
    "thesis": "Readiness signals prepare evidence for a decision; they do not declare a loan clear to close.",
    "questions": [
      "Are required records present and current?",
      "Are unresolved exceptions plainly visible?",
      "Can the authorized reviewer locate every approval?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "A structured review of operational signals that indicate whether a file is organized for an authorized closing-readiness decision. The unit of analysis is an operational record, not a borrower outcome or a forecast of loan performance.",
          "Readiness signals prepare evidence for a decision; they do not declare a loan clear to close. The review asks whether closing readiness signals can be reconstructed by an authorized reviewer from retained events, owners, and evidence."
        ]
      },
      {
        "heading": "Source review protocol",
        "paragraphs": [
          "The closing readiness signals source set combines federal rules, regulator guidance, government program material, enterprise guidance, and security references. Sources establish context and boundaries; they do not supply an invented benchmark.",
          "For closing readiness signals, each source is logged by publisher, page title, secure URL, relevance, and review date. If guidance changes, the affected mapping must be reviewed before the control is treated as current."
        ]
      },
      {
        "heading": "Sampling and measurement method",
        "paragraphs": [
          "The review scores evidence availability, owner clarity, exception visibility, and handoff completeness while keeping the final lending decision outside the rubric. The sample should span different owners and stages, exclude unnecessary personal information, and preserve a repeatable selection note.",
          "For each closing readiness signals record, the reviewer marks ownership, input readiness, exception visibility, decision routing, and completion evidence as present, absent, or not applicable. Free-text observations explain every exception."
        ]
      },
      {
        "heading": "Data dictionary and evidence rules",
        "paragraphs": [
          "Define every closing readiness signals field before sampling. The dictionary should state its business meaning, acceptable source, responsible owner, valid states, timestamp rule, and treatment of missing or conflicting evidence. Reviewers should not create definitions after seeing results.",
          "For closing readiness signals, evidence is acceptable when an authorized reviewer can retrieve it, connect it to the sampled record, and understand the event it supports. A copied status label without a source event is not equivalent to evidence. A link that the reviewer cannot access is recorded as unavailable, not present.",
          "Use a separate reason code for not applicable. That designation requires a documented rule explaining why the checkpoint does not apply to the selected workflow. It must not become a convenient substitute for missing closing readiness signals evidence."
        ]
      },
      {
        "heading": "Quality assurance and reviewer calibration",
        "paragraphs": [
          "Before the full closing readiness signals review, two reviewers should independently score a small calibration set. They then compare disagreements, refine ambiguous definitions, and repeat the exercise. Preserve the decisions so later reviewers apply the same interpretation.",
          "Recheck a portion of completed closing readiness signals observations against the original evidence. The quality check should test selection, field accuracy, source retrieval, and reason-code use. Correct both the reported result and the underlying process when an error is confirmed.",
          "For closing readiness signals, do not allow the person who operates a sampled queue to be the only reviewer of its evidence. Operational context is valuable, but an independent check reduces the chance that familiar workarounds will be treated as documented controls."
        ]
      },
      {
        "heading": "Interpretation of findings",
        "paragraphs": [
          "Report closing readiness signals counts and denominators together. A missing field indicates a documentation gap in the sampled workflow, not proof that the underlying action never occurred. A present field is checked for traceability before it is accepted.",
          "Segment results by workflow stage and exception type. That separation helps leaders distinguish a training issue from a system design problem while avoiding unsupported causal claims about closing readiness signals.",
          "Present uncertainty next to the closing readiness signals result. Note unavailable records, selection constraints, system migrations, and any definitions changed during calibration. If the sample is small or non-random, describe the observed records and avoid projecting the rate across the entire portfolio."
        ]
      },
      {
        "heading": "Remediation design",
        "paragraphs": [
          "Translate each confirmed closing readiness signals gap into a control change with an owner, due date, verification method, and dependency. A training reminder may address incorrect use of an existing field; recurring missing evidence may require a system rule, revised handoff, or clearer authority.",
          "Prioritize closing readiness signals remediation by exposure and recurrence rather than by how easy the fix appears. Test the changed workflow with a small case set before broad release. Document the approved change, communicate it to affected roles, and keep a rollback path for unexpected operational effects."
        ]
      },
      {
        "heading": "Limits and responsible use",
        "paragraphs": [
          "This closing readiness signals editorial study does not provide legal, tax, credit, underwriting, compliance, or financial advice. It does not evaluate protected borrower characteristics, determine eligibility, or replace review by qualified professionals.",
          "The closing readiness signals method describes control evidence at a point in time. Small samples, changing requirements, inconsistent system history, and unavailable records can limit generalization. Retain the sampling note so later reviewers can reproduce or challenge the result."
        ]
      },
      {
        "heading": "Implementation path",
        "paragraphs": [
          "Start the closing readiness signals review with a dry run using de-identified or synthetic records. Resolve unclear definitions, confirm that reviewers can retrieve cited evidence, and establish who may correct the source system.",
          "Publish a closing readiness signals findings memo containing scope, sample, results, exceptions, limitations, and assigned remediation. Re-test the same control after changes and preserve both rounds so improvement claims have inspectable support."
        ]
      }
    ],
    "sources": [
      {
        "label": "HUD, housing counseling and mortgage resources",
        "url": "https://www.hud.gov/housing-counseling"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Fannie Mae Servicing Guide",
        "url": "https://servicing-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Federal Trade Commission, Gramm-Leach-Bliley Act",
        "url": "https://www.ftc.gov/business-guidance/privacy-security/gramm-leach-bliley-act"
      },
      {
        "label": "National Institute of Standards and Technology, access control",
        "url": "https://csrc.nist.gov/projects/role-based-access-control"
      },
      {
        "label": "Federal Reserve, consumer compliance resources",
        "url": "https://www.federalreserve.gov/supervisionreg/caletters/caltr.htm"
      },
      {
        "label": "Ginnie Mae MBS Guide",
        "url": "https://www.ginniemae.gov/issuers/program_guidelines/Pages/mbs_guide.aspx"
      },
      {
        "label": "USDA Rural Development, lender resources",
        "url": "https://www.rd.usda.gov/resources/usda-linc-training-resource-library/loan-origination"
      },
      {
        "label": "VA, lender resources",
        "url": "https://www.benefits.va.gov/homeloans/lenders.asp"
      }
    ],
    "related": [
      "measuring-pipeline-aging-with-stage-exit-evidence",
      "source-based-study-of-mortgage-disclosure-timing-controls",
      "evidence-framework-for-borrower-document-completeness",
      "audit-method-for-condition-queue-reliability"
    ]
  }
] as October12Research[];
export const october12ResearchBySlug=new Map(october12Research.map(x=>[x.slug,x]));
