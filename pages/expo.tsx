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

import { GetStaticProps } from 'next';

import Page from '@components/page';
import SponsorsGrid from '@components/sponsors-grid';
import Header from '@components/header';
import Layout from '@components/layout';

import { getAllSponsors } from '@lib/cms-api';
import { Sponsor } from '@lib/types';

type Props = {
  sponsors: Sponsor[];
};

const description = (<div>
  <p>The Somaliland National Electoral Commission consists of seven members, and in line with Article 11(2) of the 2001 Election Law, <br />three members are nominated by the President of the Republic, two are  nominated by the House of Elders, and the remaining two were nominated by the registered “opposition” political parties.</p>
  <p> The nominations are then  confirmed by the House of Representatives.  The term of office of the Commission is 5 years, which according to Article 11(1)(c) begins “the date the House of Representatives approves of its appointment”.</p>
</div>)

export default function ExpoPage({ sponsors }: Props) {
  const meta = {
    title: 'NEC Team - Somaliland Electrol Commision',
    description: ""
  };

  return (
    <Page meta={meta}>
      <Layout>
        <Header hero="NEC Team" description={description} />
        <SponsorsGrid sponsors={sponsors} />
      </Layout>
    </Page>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const sponsors = await getAllSponsors();

  return {
    props: {
      sponsors
    },
    revalidate: 60
  };
};
