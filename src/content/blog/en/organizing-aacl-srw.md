---
title: "Organizing AACL SRW"
description: "What we did to run the SRW"
pubDate: 2026-01-10
locale: en
translationKey: organizing-aacl-srw
draft: false
---

At [IJCNLP-AACL 2025](https://2025.aaclnet.org/), held in Mumbai, India, in December 2025, I served as a chair of the [Student Research Workshop](https://aacl2025-srw.github.io/) (SRW).
Here, I describe what we did and how things proceeded.

Around April, I was contacted by prof. Kawahara from Waseda University, who served as the faculty advisor.
I also spoke with prof. Huang from our lab, who had previously served as a student chair.
It seemed like a valuable experience, so I decided to accept the role.

Around June, the committee was finalized.
First, we launched the website and decided on the Call for Papers deadlines.
Communication was mainly done via email or ACL Mattermost, and online meetings were held as needed.
Santosh had prior experience organizing another workshop and had a clear understanding of what needed to be done, which helped a lot throughout the process.
As a first attempt in AACL SRW, we decided to use OpenReview and to accept ARR commitments in addition to direct submissions.

Santosh handled the OpenReview setup and reviewer recruitment through OpenReview.
Since I had some experience building websites, I mainly took charge of the website.
The template used in previous years did not handle responsive design very well, so I rebuilt it using [Astro](https://astro.build/), which I use for my personal website.
We also created a Google account to receive emails and an X (Twitter) account for publicity.

SRW has a mentorship program in addition to the normal paper submission process.
Around August–September (mentorship deadline period) and October–November (paper submission deadline period), I kept an eye on how many submissions and reviews were coming in.
Once the reviews were complete, we made the acceptance / rejection decisions.

In November, as the conference approached, we had a lot of meetings.
In addition to weekly meetings for SRW, I attended all-chairs meetings and meetings with Underline to keep track of what other AACL chairs were doing.

Unlike other colocated workshops, SRWs at \*ACL conferences are generally run within the main conference schedule (whereas other workshops are usually held on separate days after the main conference).
We coordinated closely with the main conference organizers regarding scheduling and venues.

One tricky issue was that the costs associated with my participation took a long time to be settled.
Since Santosh and Yifan were unlikely to attend due to Visa issues and I thought it would be better for someone to be on-site, I decided to go.
Naturally, this involved travel, accommodation, and registration costs.
While some SRWs independently seek sponsors, this time we unified the sponsers to the main conference.
There were Diversity & Inclusion and student volunteer subsidies available, so as a result, I participated while also serving as a student volunteer.
I covered my travel expenses from my own research funds, while the conference covered accommodation and registration.
This situation likely varies by conference.

Another first-time attempt this year was to hold a panel discussion instead of a keynote.
Since the main conference already had many keynotes, we felt a panel discussion would be more meaningful for students.
We discussed and decided on the theme, considered panelist candidates, and contacted them by email.
It took some time for this to be settled, so I probably should have started this process earlier.

Another task after finalizing accepted papers was compiling the proceedings.
Yifan mainly handled this, but since he was busy, I helped a bit.
We used [ACL pubcheck](https://github.com/acl-org/aclpubcheck) to check paper formatting, and when errors were found, we emailed authors to ask them to fix the errors.
Proceedings were generated using [aclpub2](https://github.com/rycolab/aclpub2).

Throughout the entire process (especially around the paper deadline and just before the conference) we frequently received email inquiries from authors and participants, and we handled them as needed.
We needed to know who would present and whether they would attend in person or online, so we prepared a Google Form for this.
However, due to some communication gaps, we ended up asking twice about this.
In hindsight, it might have been better to include these questions directly in the OpenReview submission settings. (Since participants are students who are often limited with fundings, some of them could only decide their attendance type after they got notification of D&I or volunteer subsidies. It would have been difficult to cover all cases anyway.)

About the day of the conference, SRW was held on the first day in the conference, so that day was particularly busy.
There were some schedule slips and a few missing presenters, but overall things went well.
The panel discussion addressed questions I personally had as a student, so I found it really valuable.
I am very grateful to all the panelists.
If you attended AACL but missed the panel discussion, it should still be available on Underline, and I highly recommend watching it.

That's a summary of what we did to organize AACL SRW.
It was a great experience, and it really made me appreciate how much effort goes into organizing conferences that I usually attend without thinking much about it.
Since there is relatively little open information about what conference organization actually involves, I hope this article will be of some help to those who organize SRWs in the future.
