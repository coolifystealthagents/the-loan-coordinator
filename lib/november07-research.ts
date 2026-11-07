import type { October22Research } from './october22-research';
export const november07Research: October22Research[] = [
  {
    "slug": "tlc07-re-disclosure-trigger-detection",
    "title": "Re-disclosure trigger detection",
    "category": "Disclosure operations",
    "excerpt": "A bounded protocol for redisclosure trigger detection in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-re-disclosure-trigger-detection.webp",
    "readingMinutes": 9,
    "thesis": "The redisclosure trigger detection record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Before work begins on redisclosure trigger detection, confirm which entity, period, and queue the case belongs to and who accepts the outcome. A short written rule is easier to test than an unwritten habit. Give the case a stable identifier before any document is attached. Name the owner for every open item, including items waiting on someone else. The next reviewer should not have to ask which document is authoritative. Every redisclosure trigger detection handoff names the loan coordinator and the field in the loan record that will confirm the change. If the team cannot reproduce the result from the record, the control is not finished.",
          "Confirm that the request belongs in this queue before assigning an owner. Record the requester and the promised response time. A sample redisclosure trigger detection review checks loan estimate, changed term, and the surviving value in the loan record."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The evidence set for redisclosure trigger detection should join loan estimate, changed term, redisclosure rule, and delivery record on one stable case reference. Record who supplied each document and when it arrived. Preserve a conflicting value instead of overwriting the first one. Compare the source and the destination values before drawing a conclusion. For redisclosure trigger detection, compare loan estimate with the destination value rather than relying on a status label. In this redisclosure trigger detection case, the record points to the loan record and names the loan coordinator as the decision owner."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Write the redisclosure trigger detection authority limit into the case template, including the amount, scope, and end date of any delegation. A clean-looking status is not evidence that the underlying work is correct. Do not let a familiar requester bypass the approval boundary. The record should show the source, the decision, and the surviving value in one place. The redisclosure trigger detection record should let a second reviewer rebuild the decision from changed term and redisclosure rule. Use the same definition across the queue and the review so the counts agree. Keep the original request so a later correction does not erase the reason for the work.",
          "For redisclosure trigger detection, the working file keeps loan estimate and changed term beside the decision note."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "A redisclosure trigger detection status update should point to a verifiable event in the loan record, not to a feeling about progress. Open the day with a queue pass by age, owner, and missing evidence. A case that moves between owners should keep both owner periods visible. A redisclosure trigger detection exception keeps delivery record attached and routes the question to the loan coordinator. A case with no next action is an exception even if it says in progress. Escalate an item that has waited past the written threshold. Log the handoff time when a case crosses a shift.",
          "The redisclosure trigger detection case note should show what the loan record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A repeated redisclosure trigger detection exception becomes a reason code in the queue, not a story retold in each thread. In the redisclosure trigger detection queue, an item without a next action is treated as an exception. Record who released the dependent action and when. Apply the same redisclosure trigger detection test to redisclosure rule and to the value that survives in the loan record."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Close redisclosure trigger detection only when the destination value in the loan record, the approver, and the time of the final check are all visible. A closed status is not proof that the destination changed. Verify that the surviving record is the one downstream teams will use. The redisclosure trigger detection close note cites the loan record, the approver, and the time of the final check. Test one closed case by rebuilding it from the evidence map. The redisclosure trigger detection reviewer records delivery record, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The redisclosure trigger detection review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. Do not let a deadline expand a role beyond its written limit. End the review with one change and one measure. Include a routine case, a reopened case, and a cross-owner handoff."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Label loan estimate and changed term with their versions so a later reviewer can tell a stale extract from a current one. Do not store credentials or unnecessary personal data in the case."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-cd-delivery-timing"
    ]
  },
  {
    "slug": "tlc07-closing-disclosure-delivery-timing-compliance",
    "title": "Closing disclosure delivery timing compliance",
    "category": "Disclosure operations",
    "excerpt": "A bounded protocol for CD delivery timing in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-closing-disclosure-delivery-timing-compliance.webp",
    "readingMinutes": 9,
    "thesis": "The CD delivery timing record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The CD delivery timing note should separate the request, the decision that is still open, and the person who can close it. Distinguish a new request from a correction to an earlier one. If the team cannot reproduce the result from the record, the control is not finished. The record should show the source, the decision, and the surviving value in one place. The next reviewer should not have to ask which document is authoritative. In this CD delivery timing case, the record points to the loan record and names the loan coordinator as the decision owner.",
          "For CD delivery timing, compare closing disclosure with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Map each CD delivery timing value to its source: closing disclosure for the request, delivery receipt for the check, and the loan record for the surviving destination value. Preserve a conflicting value instead of overwriting the first one. Keep the original document and the working copy in separate states. State whether the evidence is confirmed, inferred, or unavailable. For CD delivery timing, the working file keeps closing disclosure and delivery receipt beside the decision note. Keep the original request so a later correction does not erase the reason for the work. The CD delivery timing record should let a second reviewer rebuild the decision from delivery receipt and consummation date."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The the loan coordinator owns the decision in CD delivery timing; the preparer may compare, label, and route but may not approve the outcome. A role change should trigger a review of queue access. Preparation, comparison, and follow-up may sit with the assistant. Approval, payment, records disposition, and policy exceptions stay with the named owner. A case that moves between owners should keep both owner periods visible. The CD delivery timing case note should show what the loan record held at the time and who reviewed it. A clean-looking status is not evidence that the underlying work is correct.",
          "A CD delivery timing exception keeps acknowledgment attached and routes the question to the loan coordinator."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Each morning the team reviews CD delivery timing arrivals, items waiting on the the loan coordinator, and items ready for a verified close. A short written rule is easier to test than an unwritten habit. Log the handoff time when a case crosses a shift. Apply the same CD delivery timing test to consummation date and to the value that survives in the loan record. Escalate an item that has waited past the written threshold. A handoff is complete only when the receiver acknowledges it. Assign every unowned case before new work begins. In the CD delivery timing queue, an item without a next action is treated as an exception."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "If the record does not match the surviving value, stop the dependent action and log the conflict in the loan record rather than choosing the more convenient value. Use the same definition across the queue and the review so the counts agree. Route one bounded question to the owner instead of negotiating in the queue. Do not close a case just because the requester stopped asking. The CD delivery timing reviewer records acknowledgment, the owner, and the next action in one place. Preserve both values and the time each was observed. Name the owner for every open item, including items waiting on someone else.",
          "Do not let a deadline expand a role beyond its written limit. The CD delivery timing close note cites the loan record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Record the CD delivery timing close reason, the approver, and the surviving evidence reference in the same case note. Tie the close note to the original request and the final evidence. Reopen the case when the destination value is disputed. Every CD delivery timing handoff names the loan coordinator and the field in the loan record that will confirm the change. Note the next review date before closing. A sample CD delivery timing review checks closing disclosure, delivery receipt, and the surviving value in the loan record."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Review CD delivery timing with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. A stable total can hide a growing tail. Check whether the definition changed during the period. Include a routine case, a reopened case, and a cross-owner handoff."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The CD delivery timing working paper should show the request, the source, the decision, the action, and the surviving value without a private inbox. Write the note so a reviewer can reconstruct the decision without a meeting. Do not store credentials or unnecessary personal data in the case."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-escrow-notice-accuracy"
    ]
  },
  {
    "slug": "tlc07-escrow-change-notice-accuracy",
    "title": "Escrow change notice accuracy",
    "category": "Servicing operations",
    "excerpt": "A bounded protocol for escrow notice accuracy in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-escrow-change-notice-accuracy.webp",
    "readingMinutes": 9,
    "thesis": "The escrow notice accuracy record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Start escrow notice accuracy with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. Name the person who can close the question and the date by which the answer is needed. A case that moves between owners should keep both owner periods visible. Name the trigger that brought the case into the queue. State explicitly what is in scope and what is out of scope for the case. The escrow notice accuracy record should let a second reviewer rebuild the decision from payment change and notice record. Do not let a deadline expand a role beyond its written limit.",
          "If the team cannot reproduce the result from the record, the control is not finished. Distinguish a new request from a correction to an earlier one. For escrow notice accuracy, the working file keeps escrow analysis and payment change beside the decision note."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "A reviewer should be able to rebuild escrow notice accuracy from notice record, ledger entry, and the the loan record record without asking for a private screenshot. Mark missing evidence as missing, with a reason, rather than leaving a blank. State whether the evidence is confirmed, inferred, or unavailable. Name the owner for every open item, including items waiting on someone else. Use the same case key in the queue and in the evidence extract. A escrow notice accuracy exception keeps ledger entry attached and routes the question to the loan coordinator. Link each value to the field or page that supports it.",
          "The escrow notice accuracy case note should show what the loan record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A standing instruction for escrow notice accuracy needs a limit and an expiry, and the the loan coordinator should confirm it is still current. The record should show the source, the decision, and the surviving value in one place. Write the authority limit into the case template. A role change should trigger a review of queue access. A delegation needs a scope, a limit, an end date, and a named backup. In the escrow notice accuracy queue, an item without a next action is treated as an exception. Keep emergency authority narrow and followed by a review note. The next reviewer should not have to ask which document is authoritative.",
          "Record rejected and deferred requests as well as approvals. Apply the same escrow notice accuracy test to notice record and to the value that survives in the loan record."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The daily escrow notice accuracy pass starts with the oldest item, the unassigned handoff, and the case paused for more than two business days. A case with no next action is an exception even if it says in progress. Compare arrivals and completions, not only the backlog total. Keep the queue view readable on one screen. The escrow notice accuracy close note cites the loan record, the approver, and the time of the final check. Use the same definition across the queue and the review so the counts agree. A clean-looking status is not evidence that the underlying work is correct.",
          "Log the handoff time when a case crosses a shift. The escrow notice accuracy reviewer records ledger entry, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The escrow notice accuracy exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. Keep the original request so a later correction does not erase the reason for the work. An escalation that ends in silence remains open. A sample escrow notice accuracy review checks escrow analysis, payment change, and the surviving value in the loan record. Separate a data conflict from a policy conflict. Every escrow notice accuracy handoff names the loan coordinator and the field in the loan record that will confirm the change."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "If escrow notice accuracy hands work to another team, keep it open until that team acknowledges receipt and the surviving record is confirmed. Note the next review date before closing. Test one closed case by rebuilding it from the evidence map. In this escrow notice accuracy case, the record points to the loan record and names the loan coordinator as the decision owner. For escrow notice accuracy, compare escrow analysis with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "A useful escrow notice accuracy review ends with one testable change, one owner, and a date to measure whether the change moved the result. Use case-level review to explain an outlier before calling it a trend. Check whether the definition changed during the period. Record the sample frame, the reviewer, and the criteria. A stable total can hide a growing tail. End the review with one change and one measure."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Keep the escrow notice accuracy record short enough to read during the day and specific enough to survive a later audit. Write the note so a reviewer can reconstruct the decision without a meeting. Name the owner and the date beside each decision."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-condition-clearance-time"
    ]
  },
  {
    "slug": "tlc07-underwriting-condition-clearance-time",
    "title": "Underwriting condition clearance time",
    "category": "Underwriting operations",
    "excerpt": "A bounded protocol for condition clearance time in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-underwriting-condition-clearance-time.webp",
    "readingMinutes": 9,
    "thesis": "The condition clearance time record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "For condition clearance time, the first step is to write the open decision, the requesting role, and the queue owner before anyone touches the loan record. Record the queue and the entity so the case cannot drift into another team's work. Name the person who can close the question and the date by which the answer is needed. Name the trigger that brought the case into the queue. Name the owner for every open item, including items waiting on someone else. The condition clearance time case note should show what the loan record held at the time and who reviewed it.",
          "Keep the original request so a later correction does not erase the reason for the work. Do not let a deadline expand a role beyond its written limit. State explicitly what is in scope and what is out of scope for the case. A condition clearance time exception keeps approval record attached and routes the question to the loan coordinator."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Attach condition list and underwriter note to the case, label their versions, and record the time each was observed. Record who supplied each document and when it arrived. A clean-looking status is not evidence that the underlying work is correct. Preserve a conflicting value instead of overwriting the first one. Use the same definition across the queue and the review so the counts agree. Apply the same condition clearance time test to supporting document and to the value that survives in the loan record. Record the export time beside any value taken from a system. Link each value to the field or page that supports it.",
          "In the condition clearance time queue, an item without a next action is treated as an exception."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "When condition clearance time changes a record in the loan record, the the loan coordinator approves and the preparer records the action; the two roles stay separate. The next reviewer should not have to ask which document is authoritative. A complete packet is not an approval; the decision needs a person and a timestamp. The condition clearance time reviewer records approval record, the owner, and the next action in one place. The record should show the source, the decision, and the surviving value in one place. Record rejected and deferred requests as well as approvals.",
          "The condition clearance time close note cites the loan record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "End the condition clearance time shift with an owner, a next action, and a due time on every open case. Do not let a status update stand in for a verified event. Log the handoff time when a case crosses a shift. Compare arrivals and completions, not only the backlog total. Every condition clearance time handoff names the loan coordinator and the field in the loan record that will confirm the change. Check that the owner is actually available before assigning. A sample condition clearance time review checks condition list, underwriter note, and the surviving value in the loan record."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "When the record does not match the surviving value, preserve both versions, record the observation times, and route one answerable question to the the loan coordinator. When access blocks the work, name the system, role, and approver. Record who released the dependent action and when. Do not close a case just because the requester stopped asking. For condition clearance time, compare condition list with the destination value rather than relying on a status label. If the team cannot reproduce the result from the record, the control is not finished.",
          "In this condition clearance time case, the record points to the loan record and names the loan coordinator as the decision owner."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "The final condition clearance time check compares approval record with the surviving value in the loan record; a status label alone is not a close. Note the next review date before closing. Verify that the surviving record is the one downstream teams will use. The condition clearance time record should let a second reviewer rebuild the decision from underwriter note and supporting document. For condition clearance time, the working file keeps condition list and underwriter note beside the decision note."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Report condition clearance time open cases by age and dependency, not only the total, because a stable total can hide an aging tail. Record the sample frame, the reviewer, and the criteria. Report a null result as clearly as a positive one. End the review with one change and one measure. Set the next review date before the action begins."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Store sensitive condition clearance time evidence in the approved repository and keep only the reference and access path in the analysis note. Link the evidence to the exact field it supports. Name the owner and the date beside each decision. Do not store credentials or unnecessary personal data in the case. Keep the note short enough to read with the case. Archive the extract with the study so it can be repeated. Label the version of every file that can change."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-mi-certificate-completeness"
    ]
  },
  {
    "slug": "tlc07-mortgage-insurance-certificate-completeness",
    "title": "Mortgage insurance certificate completeness",
    "category": "Insurance operations",
    "excerpt": "A bounded protocol for MI certificate completeness in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-mortgage-insurance-certificate-completeness.webp",
    "readingMinutes": 9,
    "thesis": "The MI certificate completeness record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Before work begins on MI certificate completeness, confirm which entity, period, and queue the case belongs to and who accepts the outcome. The record should show the source, the decision, and the surviving value in one place. Distinguish a new request from a correction to an earlier one. Write the decision in one sentence so the reviewer knows what would count as an answer. Name the owner for every open item, including items waiting on someone else. In the MI certificate completeness queue, an item without a next action is treated as an exception. Name the trigger that brought the case into the queue.",
          "A case that moves between owners should keep both owner periods visible. A clean-looking status is not evidence that the underlying work is correct. Apply the same MI certificate completeness test to loan record and to the value that survives in the loan record."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "The evidence set for MI certificate completeness should join MI certificate, coverage amount, loan record, and renewal date on one stable case reference. A short written rule is easier to test than an unwritten habit. If the team cannot reproduce the result from the record, the control is not finished. Record the export time beside any value taken from a system. Mark missing evidence as missing, with a reason, rather than leaving a blank. The MI certificate completeness close note cites the loan record, the approver, and the time of the final check. Record who supplied each document and when it arrived.",
          "Keep the original request so a later correction does not erase the reason for the work. The MI certificate completeness reviewer records renewal date, the owner, and the next action in one place."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "Write the MI certificate completeness authority limit into the case template, including the amount, scope, and end date of any delegation. Use the same definition across the queue and the review so the counts agree. Keep emergency authority narrow and followed by a review note. Record rejected and deferred requests as well as approvals. A sample MI certificate completeness review checks MI certificate, coverage amount, and the surviving value in the loan record. Approval, payment, records disposition, and policy exceptions stay with the named owner. When urgency presses against the limit, pause and route the decision. Do not let a familiar requester bypass the approval boundary.",
          "Every MI certificate completeness handoff names the loan coordinator and the field in the loan record that will confirm the change."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "A MI certificate completeness status update should point to a verifiable event in the loan record, not to a feeling about progress. Check that the owner is actually available before assigning. A case with no next action is an exception even if it says in progress. In this MI certificate completeness case, the record points to the loan record and names the loan coordinator as the decision owner. Open the day with a queue pass by age, owner, and missing evidence. Do not let a status update stand in for a verified event.",
          "For MI certificate completeness, compare MI certificate with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "A repeated MI certificate completeness exception becomes a reason code in the queue, not a story retold in each thread. Separate a data conflict from a policy conflict. The next reviewer should not have to ask which document is authoritative. Record who released the dependent action and when. For MI certificate completeness, the working file keeps MI certificate and coverage amount beside the decision note. When access blocks the work, name the system, role, and approver. If the exception repeats, give it a reason code. The MI certificate completeness record should let a second reviewer rebuild the decision from coverage amount and loan record."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Close MI certificate completeness only when the destination value in the loan record, the approver, and the time of the final check are all visible. Do not mark complete until the check is repeatable by another reviewer. Compare the destination field, not only the activity log. The MI certificate completeness case note should show what the loan record held at the time and who reviewed it. Record the close reason with the same codes used in the exception queue. A MI certificate completeness exception keeps renewal date attached and routes the question to the loan coordinator."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "The MI certificate completeness review should separate the ordinary case, the reopened case, the missing-evidence case, and the cross-owner handoff. Do not let a deadline expand a role beyond its written limit. Report age and dependency, not only the total count. Include a routine case, a reopened case, and a cross-owner handoff. End the review with one change and one measure. A stable total can hide a growing tail."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Label MI certificate and coverage amount with their versions so a later reviewer can tell a stale extract from a current one. Archive the extract with the study so it can be repeated. Make the handoff readable by the next shift and the next auditor. Write the note so a reviewer can reconstruct the decision without a meeting. Label the version of every file that can change. Avoid a private second version in a personal document."
        ]
      }
    ],
    "sources": [
      {
        "label": "U.S. Department of Housing and Urban Development",
        "url": "https://www.hud.gov/"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-servicing-notice-compliance"
    ]
  },
  {
    "slug": "tlc07-servicing-transfer-notice-compliance",
    "title": "Servicing transfer notice compliance",
    "category": "Servicing operations",
    "excerpt": "A bounded protocol for servicing notice compliance in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-servicing-transfer-notice-compliance.webp",
    "readingMinutes": 9,
    "thesis": "The servicing notice compliance record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "The servicing notice compliance note should separate the request, the decision that is still open, and the person who can close it. Keep the original request so a later correction does not erase the reason for the work. If the team cannot reproduce the result from the record, the control is not finished. Name the owner for every open item, including items waiting on someone else. Distinguish a new request from a correction to an earlier one. The servicing notice compliance reviewer records confirmation, the owner, and the next action in one place. Record the requester and the promised response time.",
          "Give the case a stable identifier before any document is attached. Say which system of record governs if two sources disagree. The servicing notice compliance close note cites the loan record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "Map each servicing notice compliance value to its source: transfer file for the request, servicing record for the check, and the loan record for the surviving destination value. Mark missing evidence as missing, with a reason, rather than leaving a blank. Keep the original document and the working copy in separate states. Record who supplied each document and when it arrived. Every servicing notice compliance handoff names the loan coordinator and the field in the loan record that will confirm the change. Keep a version label on every file that can change. Use the same case key in the queue and in the evidence extract.",
          "Compare the source and the destination values before drawing a conclusion. A sample servicing notice compliance review checks transfer file, servicing record, and the surviving value in the loan record."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "The the loan coordinator owns the decision in servicing notice compliance; the preparer may compare, label, and route but may not approve the outcome. Name the backup owner and the coverage window in advance. Write the authority limit into the case template. Do not let a deadline expand a role beyond its written limit. For servicing notice compliance, compare transfer file with the destination value rather than relying on a status label. The record should show the source, the decision, and the surviving value in one place. The next reviewer should not have to ask which document is authoritative.",
          "A delegation needs a scope, a limit, an end date, and a named backup. In this servicing notice compliance case, the record points to the loan record and names the loan coordinator as the decision owner."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "Each morning the team reviews servicing notice compliance arrivals, items waiting on the the loan coordinator, and items ready for a verified close. Keep the queue view readable on one screen. Do not let a status update stand in for a verified event. A clean-looking status is not evidence that the underlying work is correct. The servicing notice compliance record should let a second reviewer rebuild the decision from servicing record and borrower notice. Use the same definition across the queue and the review so the counts agree. For servicing notice compliance, the working file keeps transfer file and servicing record beside the decision note."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "If the record does not match the surviving value, stop the dependent action and log the conflict in the loan record rather than choosing the more convenient value. Check whether the exception came from a form, a rule, or a permission. An escalation that ends in silence remains open. A servicing notice compliance exception keeps confirmation attached and routes the question to the loan coordinator. Keep the failed attempt and the correction in the same history. Do not close a case just because the requester stopped asking. The servicing notice compliance case note should show what the loan record held at the time and who reviewed it."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "Record the servicing notice compliance close reason, the approver, and the surviving evidence reference in the same case note. Reopen the case when the destination value is disputed. Tie the close note to the original request and the final evidence. In the servicing notice compliance queue, an item without a next action is treated as an exception. Record the approximate value, the approver, and the final check time. Apply the same servicing notice compliance test to borrower notice and to the value that survives in the loan record."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "Review servicing notice compliance with a sample drawn from the queue export before the meeting, so the discussion cannot drift to memorable cases. Keep the prior procedure available for comparison. Record the sample frame, the reviewer, and the criteria. A case that moves between owners should keep both owner periods visible."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "The servicing notice compliance working paper should show the request, the source, the decision, the action, and the surviving value without a private inbox. Keep the note short enough to read with the case. Label the version of every file that can change. Use the approved repository for sensitive content. Do not store credentials or unnecessary personal data in the case."
        ]
      }
    ],
    "sources": [
      {
        "label": "Consumer Financial Protection Bureau",
        "url": "https://www.consumerfinance.gov/"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-payoff-expiration-incidents"
    ]
  },
  {
    "slug": "tlc07-payoff-quote-expiration-incidents",
    "title": "Payoff quote expiration incidents",
    "category": "Payoff operations",
    "excerpt": "A bounded protocol for payoff expiration incidents in loan coordination and mortgage operations, with definitions, sampling, limits, and a dated review.",
    "publishedAt": "2026-11-07",
    "visibleDate": "November 7, 2026",
    "thumbnail": "/daily07/theloancoordinator/tlc07-payoff-quote-expiration-incidents.webp",
    "readingMinutes": 9,
    "thesis": "The payoff expiration incidents record can show source completeness, owner assignment, and unresolved exceptions in a frozen window.",
    "questions": [
      "What is the population and window?",
      "Which evidence is required?",
      "Who owns the exception?",
      "What change will be tested?"
    ],
    "sections": [
      {
        "heading": "Question and decision scope",
        "paragraphs": [
          "Start payoff expiration incidents with one bounded case, a named owner, and a written statement of what the reviewer is being asked to decide. Record the requester and the promised response time. Separate the request from the decision, because a complete request is not an approval. Write the decision in one sentence so the reviewer knows what would count as an answer. Note the observation window; a case without a period cannot be compared later. A sample payoff expiration incidents review checks payoff quote, per diem, and the surviving value in the loan record.",
          "Name the person who can close the question and the date by which the answer is needed. Say which system of record governs if two sources disagree. Every payoff expiration incidents handoff names the loan coordinator and the field in the loan record that will confirm the change."
        ]
      },
      {
        "heading": "Population and unit",
        "paragraphs": [
          "A reviewer should be able to rebuild payoff expiration incidents from expiration date, wire note, and the the loan record record without asking for a private screenshot. Do not let a deadline expand a role beyond its written limit. Keep a version label on every file that can change. Keep the original document and the working copy in separate states. State whether the evidence is confirmed, inferred, or unavailable. In this payoff expiration incidents case, the record points to the loan record and names the loan coordinator as the decision owner. Link each value to the field or page that supports it.",
          "A case that moves between owners should keep both owner periods visible. Use the same case key in the queue and in the evidence extract. For payoff expiration incidents, compare payoff quote with the destination value rather than relying on a status label."
        ]
      },
      {
        "heading": "Definitions and measures",
        "paragraphs": [
          "A standing instruction for payoff expiration incidents needs a limit and an expiry, and the the loan coordinator should confirm it is still current. The next reviewer should not have to ask which document is authoritative. Do not let a familiar requester bypass the approval boundary. Keep the original request so a later correction does not erase the reason for the work. The record should show the source, the decision, and the surviving value in one place. For payoff expiration incidents, the working file keeps payoff quote and per diem beside the decision note. A complete packet is not an approval; the decision needs a person and a timestamp.",
          "Record rejected and deferred requests as well as approvals. A role change should trigger a review of queue access. The payoff expiration incidents record should let a second reviewer rebuild the decision from per diem and expiration date."
        ]
      },
      {
        "heading": "Evidence dictionary",
        "paragraphs": [
          "The daily payoff expiration incidents pass starts with the oldest item, the unassigned handoff, and the case paused for more than two business days. Open the day with a queue pass by age, owner, and missing evidence. Use the same definition across the queue and the review so the counts agree. Leave the next shift a queue that needs no chat history. Record one next action and one due time per open item. The payoff expiration incidents case note should show what the loan record held at the time and who reviewed it. Assign every unowned case before new work begins.",
          "Name the owner for every open item, including items waiting on someone else. A payoff expiration incidents exception keeps wire note attached and routes the question to the loan coordinator."
        ]
      },
      {
        "heading": "Sampling and collection",
        "paragraphs": [
          "The payoff expiration incidents exception record should name the condition, the decision, the releaser, and the time the dependent action resumed. A short written rule is easier to test than an unwritten habit. Record who released the dependent action and when. Apply the same payoff expiration incidents test to expiration date and to the value that survives in the loan record. Check whether the exception came from a form, a rule, or a permission. Record the stop reason and the release decision together. In the payoff expiration incidents queue, an item without a next action is treated as an exception."
        ]
      },
      {
        "heading": "Analysis and reporting",
        "paragraphs": [
          "If payoff expiration incidents hands work to another team, keep it open until that team acknowledges receipt and the surviving record is confirmed. Keep the prior value so the change can be explained. Record the close reason with the same codes used in the exception queue. The payoff expiration incidents reviewer records wire note, the owner, and the next action in one place. A closed status is not proof that the destination changed. The payoff expiration incidents close note cites the loan record, the approver, and the time of the final check."
        ]
      },
      {
        "heading": "Limitations",
        "paragraphs": [
          "A useful payoff expiration incidents review ends with one testable change, one owner, and a date to measure whether the change moved the result. Set the next review date before the action begins. Report a null result as clearly as a positive one. Use case-level review to explain an outlier before calling it a trend. Choose the sample from the export before the meeting. Check whether the definition changed during the period."
        ]
      },
      {
        "heading": "Review and next action",
        "paragraphs": [
          "Keep the payoff expiration incidents record short enough to read during the day and specific enough to survive a later audit. Avoid a private second version in a personal document. Label the version of every file that can change. Write the note so a reviewer can reconstruct the decision without a meeting. Record event time separately from entry time."
        ]
      }
    ],
    "sources": [
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "GAO — internal control standards",
        "url": "https://www.gao.gov/greenbook"
      },
      {
        "label": "U.S. Small Business Administration",
        "url": "https://www.sba.gov/business-guide/manage-your-business"
      }
    ],
    "related": [
      "tlc-redisclosure-trigger-detection"
    ]
  }
];
