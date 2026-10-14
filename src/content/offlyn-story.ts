// The offlyn.love story page (/work/offlyn). Everything here comes from
// Mayuri's own offlyn docs (~/Documents/offlyn.love/research-docs: the case
// study, changelog and PRD), whose rule is "nothing invented", plus the
// user-conversations bullet on her resume. Market figures keep their sources.
// No traction numbers: none have been published, so none are claimed.

export const facts = [
  { label: 'Role', value: 'Co-founder · Product & Strategy' },
  { label: 'Team', value: 'Me + one founding engineer' },
  { label: 'Market', value: 'Bengaluru first' },
  { label: 'Status', value: 'Live: v1 shipped' },
];

export const summary =
  'A dating app where your pool is people your friends actually know: no strangers, no bots, no engagement algorithm. I owned the concept, product strategy, user flows and go-to-market, and partnered with a founding engineer to ship it.';

export const problem = {
  heading: 'Dating apps want your time, not your outcome',
  body: [
    'A dating app succeeds when you leave it because you met someone, yet the business earns more the longer you keep swiping. That is an incentive problem, not a feature problem.',
    'The two deepest complaints, "I can’t trust who’s on the other side" and "the app wants my attention, not my outcome", aren’t fixed by better filters or a new algorithm. They are structural, so we changed the structure.',
  ],
  stats: [
    { value: '79%', label: 'of Gen Z users report dating-app burnout' },
    { value: '40%', label: 'say they can’t find a genuine connection' },
    { value: '38%', label: 'have run into catfishing' },
    { value: '50 min', label: 'average time spent swiping each day' },
  ],
  source: 'Forbes Health × OnePoll, dating-app burnout survey',
};

export const insight = {
  heading: 'Your friends know you better than an algorithm does',
  body: [
    'Before apps, most couples met through friends. A mutual friend is a vouching system, a filter and an accountability layer at once.',
    'Apps that tried to bottle this made friends do the work. Ship and Wingman asked friends to write profiles and swipe for you, which nobody keeps doing past the first week; Ship shut down in 2022. Hinge started as friends-of-friends matching on Facebook, then dropped it in 2018.',
  ],
  bet: 'Friends shouldn’t be your matchmakers. They should be your infrastructure: trust without the favour.',
};

export const myWork = [
  'Concept & product strategy',
  'Requirements (PRD) & user flows',
  'Trust & safety model',
  'Go-to-market & launch',
  'Success metrics',
  'Talking to prospective users',
];

export const principles = [
  { title: 'Trust is the product', body: 'Every screen answers “why can I believe this person is real and safe?” before anything else.' },
  { title: 'Friends never work', body: 'The graph gives trust passively. The moment a friend has to vouch, swipe or approve, it decays into a favour.' },
  { title: 'Anti-engagement', body: 'Success is leaving the app with someone. No streaks, no infinite feed.' },
  { title: 'Deliberate over automatic', body: 'Every connection is an explicit two-way choice. Nothing is inferred or silently synced.' },
];

export const decisions = [
  {
    title: 'The pool is friends of friends. Exactly two degrees.',
    why: 'One degree is your friends (off-limits); three is strangers with extra steps. Two degrees means every match comes with an implicit voucher.',
    tradeoff: 'A brutal cold start: with no friends on the app, your feed is empty. We accepted it because it turns the weakness into the growth loop.',
  },
  {
    title: 'The mutual friend stays hidden until you both match, and is never notified.',
    why: 'Showing them while browsing invites gossip and biases the choice. Revealing them after the match keeps it honest; only the two people who matched ever know.',
    tradeoff: 'We gave up a viral “you made a match!” notification to protect what we sell: discretion.',
  },
  {
    title: 'Your friends never see you in their feed.',
    why: 'Friends see your name, number and one photo, enough to confirm it’s you. You appear only to friends of friends.',
    tradeoff: 'A smaller pool, but it makes adding your whole friend group socially safe.',
  },
  {
    title: 'Phone OTP sign-in. No passwords, no social login.',
    why: 'India is phone-first, and the number is the graph’s key: friend search, contacts and blocking all hang off it. No dependency on a social login, the dependency that ended Hinge’s original model.',
    tradeoff: 'An SMS cost per sign-up and some OTP friction.',
  },
  {
    title: 'Contacts are used in the moment, never stored.',
    why: 'Contact sync only shows who’s already here; friend requests are always explicit. In a trust product, data minimisation is positioning.',
    tradeoff: 'Slower graph growth than auto-connecting everyone.',
  },
  {
    title: 'Block any phone number, even someone who hasn’t joined.',
    why: 'In a friends-of-friends graph, your ex is plausibly two degrees away. Pre-emptive blocking was a launch requirement, not a fast-follow.',
    tradeoff: 'Engineering effort for a feature most people never touch. The ones who need it, need it absolutely.',
  },
  {
    title: 'Self-serve account deletion, on the web too.',
    why: '“Email us to delete your account” is unacceptable for a dating app. Sign in with OTP, confirm, gone.',
    tradeoff: 'Built the exit door before the growth dashboards.',
  },
];

export const flow = [
  { title: 'Sign up with your phone', body: 'OTP, no password. A name and one photo: the profile your friends can see.' },
  { title: 'Add friends you actually know', body: 'Search by number or sync contacts. They accept; every connection is mutual.' },
  { title: 'Your pool unlocks', body: 'Everyone exactly two degrees away appears. No mutual-friend names yet.' },
  { title: 'Match', body: 'Mutual interest opens a chat, and only then is the mutual friend revealed to you both.' },
  { title: 'Go offlyn', body: 'The app’s job is done. The mutual friend never finds out unless you tell them.' },
];

export const gtm = [
  { title: 'Validate with a zero-backend waitlist', body: 'A landing page with the thesis in one line, collecting name and phone into a form with no server at all.' },
  { title: 'Seed one dense graph: Bengaluru', body: 'A graph product lives on density, not reach. One city of young professionals with overlapping friend circles beats ten sparse ones.' },
  { title: 'Let the mechanic compound', body: 'An empty feed tells you exactly what to do: invite friends. Acquisition and activation are the same motion.' },
];

export const metrics = {
  northStar: 'Mutual matches per weekly active user',
  why: 'Not sessions, swipes or time in app. A mutual match is the moment the trust mechanism demonstrably worked.',
  others: [
    { title: 'Activation, the “pool moment”', body: 'New users who connect 3+ friends and see a non-empty pool within 7 days.' },
    { title: 'Graph K-factor', body: 'Accepted friend invites per activated user. Above 1, the graph compounds.' },
    { title: 'Session time, inverted', body: 'A guardrail we want low. More time in app without more matches means drift.' },
    { title: 'Trust guardrails', body: 'Block, report and deletion rates: is the safety model holding?' },
  ],
};

// From the web repo's commit history (research-docs/changelog.md).
export const timeline = [
  { when: 'Nov 2025', what: 'Landing page live with the thesis in its headline, and a waitlist with no backend.' },
  { when: 'Mar 2026', what: 'The trust surface: a public FAQ, privacy policy and terms, and a web portal for self-serve account deletion.' },
  { when: 'Apr 2026', what: 'Waitlist retired. Every sign-up link now points at the live app.' },
];

export const research =
  'I talked to prospective users to understand how they would use the product. The conversations showed that some users could be problematic, which led to a dedicated use case for handling them.';

export const next = [
  '“Notify me when someone I know joins”, but only after updating the privacy policy first.',
  'Instrument the activation and match funnel before spending anything on acquisition.',
  'A second city chosen by graph, not by map, so it starts warm.',
  'Monetisation that never sells reach or attention: never pay-to-be-seen.',
];
