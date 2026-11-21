// Google reviews of WRG's South Florida Business Profile, copied word for word
// from the WRG review history Sheet (see docs/resenas.md). Florida only: never
// show these on the Georgia page. Only reviews with their full text are listed;
// truncated, off-topic and rating-only entries stay out. No aggregate rating
// and no review markup (Google ignores self-serving reviews).

export type Review = {
  /** ID in the review history Sheet */
  id: string;
  /** First name and last initial, as shown on the site */
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  text: string;
  /** Month the review was posted on Google (YYYY-MM) */
  month: string;
  /** Office named in the review, when the review itself makes it clear */
  office?: 'miami';
};

export const googleReviews: Review[] = [
  {
    id: 'R-0021',
    name: 'Sharon G.',
    rating: 5,
    month: '2026-11',
    text: 'I had a lot of water damage the staff were excellent they came in with the fans got everything dried out no problems I would recommend this company very highly',
  },
  {
    id: 'R-0001',
    name: 'R. G.',
    rating: 4,
    month: '2026-11',
    text: "After experiencing a water damage incident in my condo unit, WRG was brought in to perform assessment, remediation, a removal & replacement plan, and restoration activity. After experiencing a couple of delays, Justin was assigned to the repair activities, and he brought immediate attention to the delay issues. I appreciated how Justin understood my concerns and involved me completely into the team communications, ensuring my coordination and awareness was maintained within the protocol of the repair team's activities. Justin's actions increased my confidence in the water damage repairs being satisfactorily accomplished...which they were. Thanks Justin!",
  },
  {
    id: 'R-0015',
    name: 'César G.',
    rating: 5,
    month: '2026-08',
    text: 'Today I would like to commend a member of The Water Restoration Group. Justin Aguirre has always been the most professional, responsive, sincere and an absolute pleasure to work with. His customer service is superb, as well as a care for his client when we need something from him. Thank you, Justin!',
  },
  {
    id: 'R-0006',
    name: 'David B.',
    rating: 5,
    month: '2020-01',
    office: 'miami',
    text: 'I am a licensed CAM. I have hired WRG over the years to resolve water damages in the building I manage and now have hired them to remove ceiling popcorn texture from the common areas of the building. Their team leaders Monica Martinez, Robert Lozano, Jorge and Luis and their staff have been amazing. Super punctual, on schedule for the project, clean up and minor repairs are resolved by the next day. Not many companies in Miami that you can write about like this. Thanks WRG!',
  },
  {
    id: 'R-0007',
    name: 'Anna B.',
    rating: 5,
    month: '2019-10',
    text: 'Great experience working with Kelly and this team of professionals.',
  },
  {
    id: 'R-0008',
    name: 'Vincent D.',
    rating: 5,
    month: '2019-01',
    text: "It was a pleasure finding a company with Ethics and a good moral compass. Thank you guy's and keep doing what you are doing!",
  },
  {
    id: 'R-0009',
    name: 'Mary M.',
    rating: 5,
    month: '2017-03',
    text: 'It is an absolute pleasure to work with WRG. The staff is efficient courteous and friendly across the board.',
  },
  {
    id: 'R-0010',
    name: 'Melissa F.',
    rating: 5,
    month: '2017-03',
    text: 'WRG is a great and reliable company. I would highly recommend them. They respond quickly and get the job done. Their staff is extremely professional and knowledgeable. Thank you for providing such wonderful services to us.',
  },
  {
    id: 'R-0011',
    name: 'Vic B.',
    rating: 5,
    month: '2017-03',
    text: 'Professional, extremely responsive. Service includes one-stop restoration and repairs.',
  },
  {
    id: 'R-0003',
    name: 'Sepehr N.',
    rating: 5,
    month: '2016-02',
    text: 'I am a real estate broker who runs into a lot of interesting situations out there with properties and client. Whenever there is a "disaster", I always suggest the Water Restoration Group, simply because I know they will show up, do what they need to do, and help my clients get back to normal...These guys make me look good! Thank you!',
  },
  {
    id: 'R-0004',
    name: 'Adriana C.',
    rating: 5,
    month: '2016-02',
    text: 'I had the great pleasure of witnessing this great team that was called out to my building not long ago. One of the top units experienced a huge leak and water was everywhere; my apartment the hallways, and inside several other apartments. The management office immediately called The Water Restoration Group and within a decent waiting period they arrived. Their entire response time was amazing during the duration of the "clean up" and where most people were seemingly stressed. The crew was very professional and diligent with their work. Everyone affected by the leak was very pleased with the results. I highly recommend The Water Restoration Group',
  },
  {
    id: 'R-0005',
    name: 'Anays C.',
    rating: 5,
    month: '2016-02',
    text: 'Work at a condominium where water damage and mold can show up any minute. I got no worries when the team of water restoration group come, they take care of everything without a hassle.',
  },
];

/** WRG's Google Business Profile (Florida), shared by the client. */
export const googleProfileUrl: string | null = 'https://share.google/bBsCTtUF5rEblz3au';

export const reviewMonth = (m: string) =>
  new Date(`${m}-01T12:00:00`).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

export const reviewById = (id: string) => googleReviews.find((r) => r.id === id)!;
