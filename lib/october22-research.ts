export type October22Research={slug:string;title:string;category:string;excerpt:string;publishedAt:string;visibleDate:string;thumbnail:string;readingMinutes:number;thesis:string;questions:string[];sections:{heading:string;paragraphs:string[]}[];sources:{label:string;url:string}[];related:string[]};
export const october22Research:October22Research[]=[
  {
    "slug": "document-request-iteration-review",
    "title": "Document Request Iteration and File Rework",
    "category": "Document control",
    "excerpt": "A review of repeat requests, missing evidence, and the owner of the next action.",
    "publishedAt": "2026-10-22",
    "visibleDate": "October 22, 2026",
    "thumbnail": "/thumbnails/october-22/document-request-iteration-review.svg",
    "readingMinutes": 13,
    "thesis": "Repeat requests are a process signal. A request log should show the missing item, accepted source, owner, and due date before another reminder is sent.",
    "questions": [
      "What evidence defines an eligible record?",
      "How are missing sources classified?",
      "Which owner closes the gap?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This review asks how loan coordination team can evaluate document request iteration without turning a single system status into proof of quality. The scope is operational: the records, handoffs, and review points that make a borrower workflow inspectable. It is not a legal, clinical, or financial determination, and it does not estimate an outcome for any one organization.",
          "The unit of analysis is the loan file and the events attached to it. Evidence includes timestamps, source documents, status changes, exception notes, and the named owner of the next action. Where public guidance addresses the same control problem, this brief uses it to frame questions rather than to infer a performance result."
        ]
      },
      {
        "heading": "Method and evidence standard",
        "paragraphs": [
          "The method is a structured document review. For each item, record the source, version, effective date, and the field it supports. Compare the coordination queue status with the underlying evidence instead of accepting the status as a fact. A discrepancy is logged as an exception until the accountable owner resolves it under current policy.",
          "The review separates observation from interpretation. An observation is what the source says or what the system shows. An interpretation is what the team believes it means. Keeping the two apart makes the finding reusable and prevents a reviewer from inheriting an assumption that was never tested."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "A defensible finding in this area is narrow. The evidence can show whether required fields are present, whether a source is current, whether a handoff has an owner, and whether an exception has a documented reason. It cannot show that a borrower will receive a particular outcome, that a regulator will agree, or that one staffing model is universally better.",
          "Use the finding to improve the loan origination system and the review routine. If the same evidence gap appears across several records, the likely cause is a process or access problem rather than an individual mistake. That distinction matters before a loan coordination team adds more checking or more staff."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Administrative records are incomplete by design. A status may reflect a deadline rather than a decision, a note may summarize without preserving the source, and a system field may be reused for more than one meaning. The review should state these limits instead of presenting a clean table as a complete account of the work.",
          "Selection also matters. Records that reach a review queue are not a random sample of all borrower work. A team that studies only its exceptions will overstate failure, while a team that studies only closed items will understate unresolved risk. Keep the sampling rule visible and repeatable."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "The practical implication is to make the evidence trail part of the work, not a reconstruction after a question arrives. A short set of structured fields, a durable source link, and an explicit exception reason will do more for loan coordination team review than a longer narrative that cannot be filtered.",
          "Assign ownership at the point of handoff. The assistant may prepare and route the record, but the loan coordination team owner must retain the judgment that affects the borrower. When that boundary is clear, the coordination queue becomes a place to review decisions rather than a place to discover what happened."
        ]
      },
      {
        "heading": "Questions for the next review",
        "paragraphs": [
          "Before reusing this analysis, ask whether the loan file still uses the same status definitions, whether the source guidance has changed, and whether the sample includes ordinary as well as exception cases. Check whether a status can be supported by a dated source and a named owner.",
          "Record what would change the conclusion. A new rule, a system migration, or a revised retention requirement can invalidate a previously reasonable assumption. The review is stronger when its reopening conditions are written down beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Owning a Home",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, FHA handbook",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Seller/Servicer Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage regulations",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
      }
    ],
    "related": [
      "condition-aging-evidence-review",
      "closing-readiness-record-review",
      "appraisal-handoff-review"
    ]
  },
  {
    "slug": "condition-aging-evidence-review",
    "title": "Condition Aging and Evidence Quality",
    "category": "Condition management",
    "excerpt": "A review of condition status, age, reopening, and the evidence behind each state.",
    "publishedAt": "2026-10-22",
    "visibleDate": "October 22, 2026",
    "thumbnail": "/thumbnails/october-22/condition-aging-evidence-review.svg",
    "readingMinutes": 13,
    "thesis": "Condition age alone does not show risk. The review should pair age with condition type, source status, owner, and the reason for reopening.",
    "questions": [
      "What evidence defines an eligible record?",
      "How are missing sources classified?",
      "Which owner closes the gap?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This review asks how loan coordination team can evaluate condition aging without turning a single system status into proof of quality. The scope is operational: the records, handoffs, and review points that make a borrower workflow inspectable. It is not a legal, clinical, or financial determination, and it does not estimate an outcome for any one organization.",
          "The unit of analysis is the loan file and the events attached to it. Evidence includes timestamps, source documents, status changes, exception notes, and the named owner of the next action. Where public guidance addresses the same control problem, this brief uses it to frame questions rather than to infer a performance result."
        ]
      },
      {
        "heading": "Method and evidence standard",
        "paragraphs": [
          "The method is a structured document review. For each item, record the source, version, effective date, and the field it supports. Compare the coordination queue status with the underlying evidence instead of accepting the status as a fact. A discrepancy is logged as an exception until the accountable owner resolves it under current policy.",
          "The review separates observation from interpretation. An observation is what the source says or what the system shows. An interpretation is what the team believes it means. Keeping the two apart makes the finding reusable and prevents a reviewer from inheriting an assumption that was never tested."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "A defensible finding in this area is narrow. The evidence can show whether required fields are present, whether a source is current, whether a handoff has an owner, and whether an exception has a documented reason. It cannot show that a borrower will receive a particular outcome, that a regulator will agree, or that one staffing model is universally better.",
          "Use the finding to improve the loan origination system and the review routine. If the same evidence gap appears across several records, the likely cause is a process or access problem rather than an individual mistake. That distinction matters before a loan coordination team adds more checking or more staff."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Administrative records are incomplete by design. A status may reflect a deadline rather than a decision, a note may summarize without preserving the source, and a system field may be reused for more than one meaning. The review should state these limits instead of presenting a clean table as a complete account of the work.",
          "Selection also matters. Records that reach a review queue are not a random sample of all borrower work. A team that studies only its exceptions will overstate failure, while a team that studies only closed items will understate unresolved risk. Keep the sampling rule visible and repeatable."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "The practical implication is to make the evidence trail part of the work, not a reconstruction after a question arrives. A short set of structured fields, a durable source link, and an explicit exception reason will do more for loan coordination team review than a longer narrative that cannot be filtered.",
          "Assign ownership at the point of handoff. The assistant may prepare and route the record, but the loan coordination team owner must retain the judgment that affects the borrower. When that boundary is clear, the coordination queue becomes a place to review decisions rather than a place to discover what happened."
        ]
      },
      {
        "heading": "Questions for the next review",
        "paragraphs": [
          "Before reusing this analysis, ask whether the loan file still uses the same status definitions, whether the source guidance has changed, and whether the sample includes ordinary as well as exception cases. Check whether a status can be supported by a dated source and a named owner.",
          "Record what would change the conclusion. A new rule, a system migration, or a revised retention requirement can invalidate a previously reasonable assumption. The review is stronger when its reopening conditions are written down beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Owning a Home",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, FHA handbook",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Seller/Servicer Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage regulations",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
      }
    ],
    "related": [
      "document-request-iteration-review",
      "closing-readiness-record-review",
      "appraisal-handoff-review"
    ]
  },
  {
    "slug": "closing-readiness-record-review",
    "title": "Closing Readiness Records and Unresolved Items",
    "category": "Closing preparation",
    "excerpt": "A structured review of documents, conditions, dates, and the stop rules before closing.",
    "publishedAt": "2026-10-22",
    "visibleDate": "October 22, 2026",
    "thumbnail": "/thumbnails/october-22/closing-readiness-record-review.svg",
    "readingMinutes": 13,
    "thesis": "Closing readiness is an evidence claim. Every required item needs a current source, a clear status, and a named owner for anything still open.",
    "questions": [
      "What evidence defines an eligible record?",
      "How are missing sources classified?",
      "Which owner closes the gap?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This review asks how loan coordination team can evaluate closing readiness without turning a single system status into proof of quality. The scope is operational: the records, handoffs, and review points that make a borrower workflow inspectable. It is not a legal, clinical, or financial determination, and it does not estimate an outcome for any one organization.",
          "The unit of analysis is the loan file and the events attached to it. Evidence includes timestamps, source documents, status changes, exception notes, and the named owner of the next action. Where public guidance addresses the same control problem, this brief uses it to frame questions rather than to infer a performance result."
        ]
      },
      {
        "heading": "Method and evidence standard",
        "paragraphs": [
          "The method is a structured document review. For each item, record the source, version, effective date, and the field it supports. Compare the coordination queue status with the underlying evidence instead of accepting the status as a fact. A discrepancy is logged as an exception until the accountable owner resolves it under current policy.",
          "The review separates observation from interpretation. An observation is what the source says or what the system shows. An interpretation is what the team believes it means. Keeping the two apart makes the finding reusable and prevents a reviewer from inheriting an assumption that was never tested."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "A defensible finding in this area is narrow. The evidence can show whether required fields are present, whether a source is current, whether a handoff has an owner, and whether an exception has a documented reason. It cannot show that a borrower will receive a particular outcome, that a regulator will agree, or that one staffing model is universally better.",
          "Use the finding to improve the loan origination system and the review routine. If the same evidence gap appears across several records, the likely cause is a process or access problem rather than an individual mistake. That distinction matters before a loan coordination team adds more checking or more staff."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Administrative records are incomplete by design. A status may reflect a deadline rather than a decision, a note may summarize without preserving the source, and a system field may be reused for more than one meaning. The review should state these limits instead of presenting a clean table as a complete account of the work.",
          "Selection also matters. Records that reach a review queue are not a random sample of all borrower work. A team that studies only its exceptions will overstate failure, while a team that studies only closed items will understate unresolved risk. Keep the sampling rule visible and repeatable."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "The practical implication is to make the evidence trail part of the work, not a reconstruction after a question arrives. A short set of structured fields, a durable source link, and an explicit exception reason will do more for loan coordination team review than a longer narrative that cannot be filtered.",
          "Assign ownership at the point of handoff. The assistant may prepare and route the record, but the loan coordination team owner must retain the judgment that affects the borrower. When that boundary is clear, the coordination queue becomes a place to review decisions rather than a place to discover what happened."
        ]
      },
      {
        "heading": "Questions for the next review",
        "paragraphs": [
          "Before reusing this analysis, ask whether the loan file still uses the same status definitions, whether the source guidance has changed, and whether the sample includes ordinary as well as exception cases. Check whether a status can be supported by a dated source and a named owner.",
          "Record what would change the conclusion. A new rule, a system migration, or a revised retention requirement can invalidate a previously reasonable assumption. The review is stronger when its reopening conditions are written down beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Owning a Home",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, FHA handbook",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Seller/Servicer Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage regulations",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
      }
    ],
    "related": [
      "document-request-iteration-review",
      "condition-aging-evidence-review",
      "appraisal-handoff-review"
    ]
  },
  {
    "slug": "appraisal-handoff-review",
    "title": "Appraisal Handoff Evidence and Milestone Risk",
    "category": "Vendor coordination",
    "excerpt": "A review of order, access, delivery, revision, and ownership between milestones.",
    "publishedAt": "2026-10-22",
    "visibleDate": "October 22, 2026",
    "thumbnail": "/thumbnails/october-22/appraisal-handoff-review.svg",
    "readingMinutes": 13,
    "thesis": "Appraisal risk sits between milestones. Access, fee, revision, and delivery expectations need a durable owner, not a memory of the last call.",
    "questions": [
      "What evidence defines an eligible record?",
      "How are missing sources classified?",
      "Which owner closes the gap?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This review asks how loan coordination team can evaluate appraisal handoffs without turning a single system status into proof of quality. The scope is operational: the records, handoffs, and review points that make a borrower workflow inspectable. It is not a legal, clinical, or financial determination, and it does not estimate an outcome for any one organization.",
          "The unit of analysis is the loan file and the events attached to it. Evidence includes timestamps, source documents, status changes, exception notes, and the named owner of the next action. Where public guidance addresses the same control problem, this brief uses it to frame questions rather than to infer a performance result."
        ]
      },
      {
        "heading": "Method and evidence standard",
        "paragraphs": [
          "The method is a structured document review. For each item, record the source, version, effective date, and the field it supports. Compare the coordination queue status with the underlying evidence instead of accepting the status as a fact. A discrepancy is logged as an exception until the accountable owner resolves it under current policy.",
          "The review separates observation from interpretation. An observation is what the source says or what the system shows. An interpretation is what the team believes it means. Keeping the two apart makes the finding reusable and prevents a reviewer from inheriting an assumption that was never tested."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "A defensible finding in this area is narrow. The evidence can show whether required fields are present, whether a source is current, whether a handoff has an owner, and whether an exception has a documented reason. It cannot show that a borrower will receive a particular outcome, that a regulator will agree, or that one staffing model is universally better.",
          "Use the finding to improve the loan origination system and the review routine. If the same evidence gap appears across several records, the likely cause is a process or access problem rather than an individual mistake. That distinction matters before a loan coordination team adds more checking or more staff."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Administrative records are incomplete by design. A status may reflect a deadline rather than a decision, a note may summarize without preserving the source, and a system field may be reused for more than one meaning. The review should state these limits instead of presenting a clean table as a complete account of the work.",
          "Selection also matters. Records that reach a review queue are not a random sample of all borrower work. A team that studies only its exceptions will overstate failure, while a team that studies only closed items will understate unresolved risk. Keep the sampling rule visible and repeatable."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "The practical implication is to make the evidence trail part of the work, not a reconstruction after a question arrives. A short set of structured fields, a durable source link, and an explicit exception reason will do more for loan coordination team review than a longer narrative that cannot be filtered.",
          "Assign ownership at the point of handoff. The assistant may prepare and route the record, but the loan coordination team owner must retain the judgment that affects the borrower. When that boundary is clear, the coordination queue becomes a place to review decisions rather than a place to discover what happened."
        ]
      },
      {
        "heading": "Questions for the next review",
        "paragraphs": [
          "Before reusing this analysis, ask whether the loan file still uses the same status definitions, whether the source guidance has changed, and whether the sample includes ordinary as well as exception cases. Check whether a status can be supported by a dated source and a named owner.",
          "Record what would change the conclusion. A new rule, a system migration, or a revised retention requirement can invalidate a previously reasonable assumption. The review is stronger when its reopening conditions are written down beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Owning a Home",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, FHA handbook",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Seller/Servicer Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage regulations",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
      }
    ],
    "related": [
      "document-request-iteration-review",
      "condition-aging-evidence-review",
      "closing-readiness-record-review"
    ]
  },
  {
    "slug": "pipeline-status-reliability-review",
    "title": "Pipeline Status Reliability in Loan Coordination",
    "category": "Pipeline records",
    "excerpt": "A review of status definitions, effective times, and the owner of the next action.",
    "publishedAt": "2026-10-22",
    "visibleDate": "October 22, 2026",
    "thumbnail": "/thumbnails/october-22/pipeline-status-reliability-review.svg",
    "readingMinutes": 13,
    "thesis": "A pipeline status is reliable only when its definition, timestamp, source, and next owner are explicit. Without them, a green status can hide an unresolved condition.",
    "questions": [
      "What evidence defines an eligible record?",
      "How are missing sources classified?",
      "Which owner closes the gap?"
    ],
    "sections": [
      {
        "heading": "Research question and scope",
        "paragraphs": [
          "This review asks how loan coordination team can evaluate pipeline status without turning a single system status into proof of quality. The scope is operational: the records, handoffs, and review points that make a borrower workflow inspectable. It is not a legal, clinical, or financial determination, and it does not estimate an outcome for any one organization.",
          "The unit of analysis is the loan file and the events attached to it. Evidence includes timestamps, source documents, status changes, exception notes, and the named owner of the next action. Where public guidance addresses the same control problem, this brief uses it to frame questions rather than to infer a performance result."
        ]
      },
      {
        "heading": "Method and evidence standard",
        "paragraphs": [
          "The method is a structured document review. For each item, record the source, version, effective date, and the field it supports. Compare the coordination queue status with the underlying evidence instead of accepting the status as a fact. A discrepancy is logged as an exception until the accountable owner resolves it under current policy.",
          "The review separates observation from interpretation. An observation is what the source says or what the system shows. An interpretation is what the team believes it means. Keeping the two apart makes the finding reusable and prevents a reviewer from inheriting an assumption that was never tested."
        ]
      },
      {
        "heading": "What the evidence can support",
        "paragraphs": [
          "A defensible finding in this area is narrow. The evidence can show whether required fields are present, whether a source is current, whether a handoff has an owner, and whether an exception has a documented reason. It cannot show that a borrower will receive a particular outcome, that a regulator will agree, or that one staffing model is universally better.",
          "Use the finding to improve the loan origination system and the review routine. If the same evidence gap appears across several records, the likely cause is a process or access problem rather than an individual mistake. That distinction matters before a loan coordination team adds more checking or more staff."
        ]
      },
      {
        "heading": "Limitations and sources of error",
        "paragraphs": [
          "Administrative records are incomplete by design. A status may reflect a deadline rather than a decision, a note may summarize without preserving the source, and a system field may be reused for more than one meaning. The review should state these limits instead of presenting a clean table as a complete account of the work.",
          "Selection also matters. Records that reach a review queue are not a random sample of all borrower work. A team that studies only its exceptions will overstate failure, while a team that studies only closed items will understate unresolved risk. Keep the sampling rule visible and repeatable."
        ]
      },
      {
        "heading": "Operational implications",
        "paragraphs": [
          "The practical implication is to make the evidence trail part of the work, not a reconstruction after a question arrives. A short set of structured fields, a durable source link, and an explicit exception reason will do more for loan coordination team review than a longer narrative that cannot be filtered.",
          "Assign ownership at the point of handoff. The assistant may prepare and route the record, but the loan coordination team owner must retain the judgment that affects the borrower. When that boundary is clear, the coordination queue becomes a place to review decisions rather than a place to discover what happened."
        ]
      },
      {
        "heading": "Questions for the next review",
        "paragraphs": [
          "Before reusing this analysis, ask whether the loan file still uses the same status definitions, whether the source guidance has changed, and whether the sample includes ordinary as well as exception cases. Check whether a status can be supported by a dated source and a named owner.",
          "Record what would change the conclusion. A new rule, a system migration, or a revised retention requirement can invalidate a previously reasonable assumption. The review is stronger when its reopening conditions are written down beside the finding."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau, Owning a Home",
        "url": "https://www.consumerfinance.gov/owning-a-home/"
      },
      {
        "label": "U.S. Department of Housing and Urban Development, FHA handbook",
        "url": "https://www.hud.gov/program_offices/housing/sfh/handbook_4000-1"
      },
      {
        "label": "Fannie Mae Selling Guide",
        "url": "https://selling-guide.fanniemae.com/"
      },
      {
        "label": "Freddie Mac Seller/Servicer Guide",
        "url": "https://guide.freddiemac.com/"
      },
      {
        "label": "Consumer Financial Protection Bureau, mortgage regulations",
        "url": "https://www.consumerfinance.gov/rules-policy/regulations/1024/"
      }
    ],
    "related": [
      "document-request-iteration-review",
      "condition-aging-evidence-review",
      "closing-readiness-record-review"
    ]
  }
];
