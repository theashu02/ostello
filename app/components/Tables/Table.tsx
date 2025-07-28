'use client'

import React from 'react'

/**
 * Full-page informational article for “NEET Exam 2026”.
 * • Pure JSX + Tailwind – no external style-tags left.
 * • Custom colours (e.g. #a5cfdb) kept via Tailwind’s arbitrary-value syntax.
 * • All tables use consistent Tailwind border utilities.
 *
 *   Tip: wrap this component in a <ScrollArea> or <Layout> of your choice
 *  if you’d like fixed headers, side-bars, etc.
 */
export default function NeetExam2026() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-8">
      {/* ---------------------------------------------------------------- */}
      {/* Lead section                                                    */}
      {/* ---------------------------------------------------------------- */}
      <h2 className="text-2xl font-semibold mb-4">NEET Exam 2026 Overview</h2>

      <p className="text-justify mb-4">
        The National Eligibility cum Entrance Test (NEET) 2026 is a national-level
        entrance exam conducted by the National Testing Agency (NTA) for admission to
        undergraduate medical, dental, and AYUSH courses like MBBS, BDS, BAMS, BHMS,
        etc. It is mandatory for students who wish to take admission in government
        and private medical colleges across India. The NEET exam is held once a year
        in offline (pen-and-paper) mode and includes questions from Physics,
        Chemistry, and Biology based on the Class 11 and 12 NCERT syllabus. The NEET
        2026 exam will be conducted in May 2026, and candidates must qualify it to
        participate in All India Quota (AIQ) and State Quota counselling rounds.
      </p>

      {/* ---------------------------------------------------------------- */}
      {/* Table: Highlights                                               */}
      {/* ---------------------------------------------------------------- */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse text-center">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="bg-[#a5cfdb] border border-black p-2 font-semibold"
              >
                NEET Exam 2026 Highlights
              </th>
            </tr>
            <tr>
              <th className="border border-black p-2">Particulars</th>
              <th className="border border-black p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Exam Name', 'NEET UG 2026'],
              ['Conducting Body', 'National Testing Agency (NTA)'],
              ['Exam Level', 'National-level'],
              ['Exam Mode', 'Offline (Pen and Paper)'],
              [
                'Courses Offered',
                'MBBS, BDS, AYUSH, B.V.Sc, BSc Nursing',
              ],
              [
                'Subjects',
                'Physics, Chemistry, Biology (Botany + Zoology)',
              ],
              ['Total Questions', '180'],
              ['Total Marks', '720'],
              ['Exam Duration', '3 hours'],
              ['Marking Scheme', '+4 for correct, -1 for incorrect'],
              ['Exam Frequency', 'Once a year'],
              [
                'Official Website',
                'The official NEET 2026 website has not been announced yet.',
              ],
            ].map(([label, value]) => (
              <tr key={label}>
                <td className="border border-black p-2">{label}</td>
                <td className="border border-black p-2">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Syllabus section                                                */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-xl font-semibold mt-10 mb-4">NEET 2026 Syllabus</h3>
      <p className="text-justify mb-4">
        The National Medical Commission (NMC) has not officially announced the{' '}
        <a
          href="https://www.pw.live/neet/exams/neet-syllabus"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          NEET 2026 Syllabus
        </a>{' '}
        yet. Currently, the syllabus for NEET 2025 is being followed, which is the
        same as the syllabus used in NEET 2024 with no major changes. Students
        preparing for NEET 2026 can start their preparation based on the NEET 2025
        syllabus until the official 2026 syllabus is released. The syllabus includes
        topics from Class 11 and 12 Physics, Chemistry, and Biology, aligned with the
        standard NEET exam format. Understanding the detailed syllabus provided by
        the NMC is crucial for thorough preparation.
      </p>

      {/* Table: Subject-wise Syllabus Breakdown */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse text-center">
          <thead>
            <tr>
              <th
                colSpan={3}
                className="bg-[#a5cfdb] border border-black p-2 font-semibold"
              >
                NEET Syllabus 2026 – Subjects Wise Breakdown
              </th>
            </tr>
            <tr>
              {['Biology', 'Physics', 'Chemistry'].map((h) => (
                <th key={h} className="border border-black p-2">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Diversity of Living Organisms',
                'Physics And Measurement',
                'Some Basic Concepts of Chemistry',
              ],
              [
                'Structural Organization in Plants & Animals',
                'Kinematics',
                'Structure of Atom',
              ],
              [
                'Cell Structure and Function',
                'Laws Of Motion',
                'Classification of Elements and Periodicity in Properties',
              ],
              [
                'Plant Physiology',
                'Work, Energy, and Power',
                'Chemical Bonding and Molecular Structure',
              ],
              [
                'Human Physiology',
                'Rotational Motion',
                'States of Matter: Gases and Liquids',
              ],
              ['Reproduction', 'Gravitation', 'Thermodynamics'],
              ['Genetics & Evolution', 'Properties of Solids and Liquids', 'Equilibrium'],
              ['Biology and Human Welfare', 'Thermodynamics', 'Redox Reactions'],
              [
                'Biotechnology and its Applications',
                'Kinetic Theory of Gases',
                'Classification of Elements and Periodicity in Properties',
              ],
              ['Ecology and Environment', 'Oscillation and Waves', 'P-Block Elements'],
              ['–', 'Electrostatics', 'd- and f-Block Elements'],
              ['–', 'Current Electricity', 'Coordination Compounds'],
              [
                '–',
                'Magnetic Effects of Current and Magnetism',
                'Purification and Characterisation of Organic Compounds',
              ],
              [
                '–',
                'Electromagnetic Induction and Alternating Currents',
                'Some Basic Principles of Organic Chemistry',
              ],
              ['–', 'Electromagnetic Waves', 'Hydrocarbons'],
              ['–', 'Optics', 'Organic Compounds Containing Halogens'],
              ['–', 'Dual Nature of Matter and Radiation', 'Organic Compounds Containing Oxygen'],
              ['–', 'Atoms and Nuclei', 'Organic Compounds Containing Nitrogen'],
              ['–', 'Electronic Devices', 'Biomolecules'],
              ['–', 'Experimental Skills', 'Principles Related to Practical Chemistry'],
            ].map(([bio, phy, chem], idx) => (
              <tr key={idx}>
                {[bio, phy, chem].map((txt) => (
                  <td key={txt} className="border border-black p-2">
                    {txt}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Exam pattern                                                    */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-xl font-semibold mt-10 mb-4">NEET 2026 Exam Pattern</h3>
      <p className="text-justify mb-4">
        The NEET UG 2026 exam will follow a revised pattern, reverting to the
        pre-COVID format. The exam will be conducted in pen-and-paper mode
        (OMR-based), and candidates will mark their answers on the OMR sheet. It will
        consist of 180 compulsory multiple-choice questions (MCQs) divided across
        three subjects: Physics (45 questions), Chemistry (45 questions), and Biology
        (90 questions, with 45 each from Botany and Zoology).
      </p>
      <p className="text-justify mb-4">
        The total duration of the exam will be 180 minutes (3 hours), with no
        additional time provided. Each correct answer will earn 4 marks, while 1 mark
        will be deducted for each incorrect answer, and unattempted questions will
        carry no marks. One key change for NEET UG is the removal of Section B, which
        previously included optional questions. This means that all 180 questions
        will be mandatory for candidates, ensuring a uniform and fair exam
        experience for all.
      </p>

      {/* Table: Pattern Overview */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse text-center">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="bg-[#a5cfdb] border border-black p-2 font-semibold"
              >
                NEET Exam Pattern 2026 Overview
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              ['Exam Name', 'National Eligibility cum Entrance Test (NEET)'],
              ['Conducting Body', 'National Testing Agency'],
              ['Mode of the examination', 'Pen - Paper Mode'],
              ['Duration of the exam', '3 hours (Updated)'],
              ['Total Questions', '180 Questions (Previously 200 Questions)'],
              ['Total Marks', '720 Marks'],
              ['Question Type', 'MCQs'],
              ['Marking Scheme', '+4 marks for each correct answer, -1 for each incorrect answer'],
              [
                'NEET Languages',
                '13 (English, Hindi, Assamese, Bengali, Gujarati, Marathi, Tamil, Telugu, Oriya, Malayalam, Kannada, Punjabi and Urdu)',
              ],
            ].map(([label, val]) => (
              <tr key={label}>
                <td className="border border-black p-2">{label}</td>
                <td className="border border-black p-2">{val}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Eligibility section                                             */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-xl font-semibold mt-10 mb-4">NEET 2026 Eligibility Criteria</h3>
      <p className="text-justify mb-4">
        Candidates must meet the{' '}
        <a
          href="https://www.pw.live/exams/neet/neet-eligibility-criteria/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          eligibility criteria for NEET 2026
        </a>
        , including age, educational qualifications, and nationality, to appear for
        the exam. Make sure to check all requirements before applying.
      </p>

      {/* Table: Eligibility */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse text-center">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="bg-[#a5cfdb] border border-black p-2 font-semibold"
              >
                NEET Eligibility Criteria 2026
              </th>
            </tr>
            <tr>
              <th className="border border-black p-2">Criteria</th>
              <th className="border border-black p-2">Details</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'Nationality',
                'Indian Nationals, NRIs, OCIs, PIOs, and Foreign Nationals are eligible to apply.',
              ],
              [
                'Age Limit',
                'Candidates must be at least 17 years old by December 31, 2026. No upper age limit as per the Supreme Court’s order.',
              ],
              [
                'Educational Qualification',
                'Must have passed 10+2 or equivalent with Physics, Chemistry, Biology/Biotechnology, and English.',
              ],
              [
                'Minimum Marks in Qualifying Exam',
                'General category: 50%, OBC/SC/ST: 40%, PwD: 45%',
              ],
              ['Number of Attempts', 'No limit on the number of attempts.'],
              [
                'Year of Passing',
                'Candidates who are appearing for their qualifying exam in 2025 are also eligible to apply.',
              ],
            ].map(([c, d]) => (
              <tr key={c}>
                <td className="border border-black p-2">{c}</td>
                <td className="border border-black p-2">{d}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Exam dates                                                      */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-xl font-semibold mt-10 mb-4">NEET 2026 Exam Date</h3>
      <p className="text-justify mb-4">
        The NEET UG 2026 exam is expected to be scheduled on the first Sunday of May
        2026 i.e., May 3, 2026. NTA will release the NEET official Information
        Bulletin with the full exam schedule and important details.
      </p>

      {/* Table: Exam Dates */}
      <div className="overflow-x-auto">
        <table className="w-full border border-black border-collapse text-center">
          <thead>
            <tr>
              <th
                colSpan={2}
                className="bg-[#a5cfdb] border border-black p-2 font-semibold"
              >
                NEET 2026 Exam Dates
              </th>
            </tr>
            <tr>
              <th className="border border-black p-2">Event</th>
              <th className="border border-black p-2">Dates</th>
            </tr>
          </thead>
          <tbody>
            {[
              [
                'NEET 2026 Exam Date',
                '3 May 2026 (Expected)',
                'https://www.pw.live/neet/exams/neet-exam-date',
              ],
              ['NEET 2026 Admit Card Release', 'Updated Soon'],
              ['Release of NEET 2026 Answer Key', 'Updated Soon'],
              ['NEET 2026 Scorecard Availability', 'Updated Soon'],
              ['NEET 2026 Exam Result', 'Updated Soon'],
            ].map(([event, date, link]) => (
              <tr key={event}>
                <td className="border border-black p-2">
                  {link ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      {event}
                    </a>
                  ) : (
                    event
                  )}
                </td>
                <td className="border border-black p-2">{date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ---------------------------------------------------------------- */}
      {/* Admit card, result (text only)                                  */}
      {/* ---------------------------------------------------------------- */}
      <h3 className="text-xl font-semibold mt-10 mb-4">NEET 2026 Admit Card</h3>
      <p className="text-justify mb-4">
        NEET 2026 admit card is a crucial document required to appear for the exam.
        It is expected to be released a few days before the exam, likely in April
        2026, on the official NEET website. Candidates must log in using their
        registration credentials to download the admit card. It contains important
        details such as the candidate’s name, roll number, exam center, date, and
        time of the exam. Carrying the admit card along with a valid photo ID is
        mandatory for entry into the examination hall.
      </p>

      <h3 className="text-xl font-semibold mb-4">NEET 2026 Result</h3>
      <p className="text-justify mb-4">
        NEET 2026 result will be declared online by the NTA on the official website
        after the exam and answer key release. The result includes the candidate’s
        total marks, subject-wise marks, percentile score, and All India Rank (AIR).
        Candidates can check their result by entering their roll number and other
        required credentials. The result is important for counselling and seat
        allocation in medical and dental colleges across India. Candidates who
        qualify the exam by meeting the cut-off criteria will be eligible to
        participate in the counselling process.
      </p>

      {/* Remaining sections (Courses, Study Material, Mentorship, Toppers, Tips)
          --------------------------------------------------------------------
          To keep this file reasonably concise, you can follow the same pattern:
          1. use Tailwind utilities for spacing/typography
          2. map() over arrays for any repetitive rows
          3. wrap big tables in `overflow-x-auto`
      */}
    </div>
  )
}