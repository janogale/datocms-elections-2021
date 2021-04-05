/**
 * Copyright 2020 Vercel Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const SITE_URL = 'https://somalilandcandidates.com';
export const SITE_ORIGIN = process.env.NEXT_PUBLIC_SITE_ORIGIN || new URL(SITE_URL).origin;
export const TWITTER_USER_NAME = 'necsomaliland';
export const BRAND_NAME = 'NEC';
export const SITE_NAME_MULTILINE = ['NEC', 'SOMALILAND'];
export const SITE_NAME = 'Somaliland NEC';
export const META_DESCRIPTION =
  'Waa Platform loogu talo galay in lagu soo bandhigo Macluumaadka Muraxashiinta Doorasha Baarlamaanka iyo Deegaanka Somaliland ee dhacaysa Sanadka 2021';
export const SITE_DESCRIPTION =
  'Waa Platform loogu talo galay in lagu soo bandhigo Macluumaadka Muraxashiinta';
export const DATE = 'May 31, 2021';
export const SHORT_DATE = 'Oct 27 - 9:00am PST';
export const FULL_DATE = 'Oct 27th 9am Pacific Time (GMT-7)';
export const TWEET_TEXT = META_DESCRIPTION;
export const COOKIE = 'user-id';

// Remove process.env.NEXT_PUBLIC_... below and replace them with
// strings containing your own privacy policy URL and copyright holder name
export const LEGAL_URL = process.env.NEXT_PUBLIC_PRIVACY_POLICY_URL;
export const COPYRIGHT_HOLDER = process.env.NEXT_PUBLIC_COPYRIGHT_HOLDER;

export const CODE_OF_CONDUCT =
  'https://slnec.com/nec/';
export const REPO = 'https://slnec.com/nec/';
export const SAMPLE_TICKET_NUMBER = 1234;
export const NAVIGATION = [

  {
    name: 'Candidates',
    route: '/'
  },
  {
    name: 'NEC Team',
    route: '/expo'
  },

  {
    name: 'NEC Updates',
    route: '/updates'
  },
  {
    name: 'Voting Day',
    route: '/schedule'
  },
];

export type TicketGenerationState = 'default' | 'loading';
