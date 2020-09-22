import { Text } from "@geist-ui/react";
import { Issues } from "./types";

export const data = {
  [Issues.Coronavirus]: {
    summary:
      "Public health emergencies require disciplined, trustworthy leadership grounded in science. Biden knows how to mount an effective crisis response and elevate the voices of scientists, public health experts, and first responders. He helped lead the Obama-Biden Administration’s effective response to the 2009 H1N1 pandemic and the 2014 Ebola epidemic. Biden also helped lead the response to the greatest economic crisis since the Great Depression and ran point on implementation of the Recovery Act. He knows how to get relief out the door to families, as well as resources to state and local officials to deal with the challenges they are facing.",
    href: "https://joebiden.com/covid-plan/",
    federal: [
      {
        biden: (
          <Text>
            Ensure all Americans have access to regular, reliable, and free
            testing. By doubling the number of drive-through testing sites and
            investing in next-generation testing, including at home tests and
            instant tests, in order to{" "}
            <Text b type="success">
              scale up testing capacity by orders of magnitude.
            </Text>
          </Text>
        ),
        trump:
          "The needless failure to make available universal quick-response testing is the worst single cause of the renewed spread of the virus.",
      },
      {
        biden: (
          <Text>
            Provide clear, consistent,{" "}
            <Text b type="success">
              evidence-based national guidance
            </Text>{" "}
            for how communities should navigate the pandemic — and the resources
            for schools, small businesses, and families to make it through
          </Text>
        ),
        trump: (
          <Text>
            Despite months of alarms that the coronavirus was lurking at our
            doorstep, the Trump administration{" "}
            <Text type="error" b>
              failed to mount an urgent response
            </Text>{" "}
            until the nation was engulfed and overwhelmed by the pandemic.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Plan for the{" "}
            <Text b type="success">
              effective, equitable distribution{" "}
            </Text>
            of treatments and vaccines because discovering isn’t enough if they
            get distributed to only the wealthy and well-connected.
          </Text>
        ),

        trump: (
          <Text>
            Trump was ignoring warnings that the numbers would continue to drop
            only if social distancing was kept in place, rushing instead to
            restart the economy and tend to his battered re-election hopes.
          </Text>
        ),
      },
    ],
  },
  [Issues.CriminalJustice]: {
    summary:
      "Today, too many people are incarcerated in the United States – and too many of them are black and brown. To build safe and healthy communities, we need to rethink who we’re sending to jail, how we treat those in jail, and how we help them get the health care, education, jobs, and housing they need to successfully rejoin society after they serve their time. As president, Joe Biden will strengthen America’s commitment to justice and reform our criminal justice system.",
    href: "https://joebiden.com/justice/",
    federal: [
      {
        biden: (
          <Text>
            Refocus criminal justice system on redemption and rehabilitation,
            which means getting people who should be supported with{" "}
            <Text b type="success">
              social services, instead of in our prisons,
            </Text>{" "}
            connected to the help they need.
          </Text>
        ),

        trump: (
          <Text>
            Limited consent decrees between the Justice Department and police
            departments, which is a tool used to address circumstances of
            “systemic police misconduct” and to “restore trust between police
            and communities” in cities
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Expand and use the power of the U.S. Justice Department to{" "}
            <Text b type="success">
              address systemic misconduct in police departments
            </Text>{" "}
            and prosecutors’ offices.
          </Text>
        ),
        trump: (
          <Text>Allows corporations to profiteer off of incarceration.</Text>
        ),
      },
      {
        biden: (
          <Text>
            Eliminate existing barriers preventing formerly incarcerated
            individuals from fully participating in society.
          </Text>
        ),
        trump: <Text>Cut funding for transitional housing.</Text>,
      },
    ],
  },
  [Issues.Economy]: {
    summary:
      "For four years, Trump has relentlessly pursued an economic agenda that rewards wealth over work and favors multinational corporations over small businesses. After first trying to strip health care protections away from more than 100 million Americans with pre-existing conditions, President Trump spent the remainder of his first year in office fighting for a $1.5 trillion tax giveaway primarily for large corporations and the wealthy. Tax experts estimate that over the long run, 83% of Trump’s tax giveaway will flow to the top 1% of earners in this country. And, while our country faces an unconscionable racial wealth gap, the average Black and Latino family received less than half the tax savings as the average white family. ",
    href:
      "https://joebiden.com/a-tale-of-two-tax-policies-trump-rewards-wealth-biden-rewards-work/",
    federal: [
      {
        biden: (
          <Text>
            Biden is committed to offering specific{" "}
            <Text b type="success">
              tax cuts
            </Text>{" "}
            for major costs families face, including tax credits that help
            working families afford:{" "}
            <Text b type="success">
              health insurance, child care, pay for the cost of caring for an
              aging loved one and buy their first homes and build wealth — up to
              $15,000.
            </Text>
          </Text>
        ),

        trump: (
          <Text>
            Trump has pledged to lower the maximum capital gains rate – the tax
            paid on profits from investments – to just 15% for wealthy
            Americans. If Trump succeeds,{" "}
            <Text b type="error">
              99% of this giveaway will flow to the top one percent.
            </Text>
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Requiring a true minimum tax on ALL foreign earnings of United
            States companies located overseas so that we do our part to put an
            end to the global race to the bottom that rewards global tax havens.
          </Text>
        ),

        trump: (
          <Text>
            In Trump's America,{" "}
            <Text type="error" b>
              foreign investors received a bigger tax cut than the 95 million
              most-hard pressed working households
            </Text>{" "}
            in our nation — combined. Corporations that pocketed billions of
            dollars from the tax giveaway still slashed jobs, shifted production
            overseas, and passed profits through to wealthy investors.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Joe Biden will not raise taxes on anyone making less than $400,000.
            Period.
          </Text>
        ),

        trump: (
          <Text>
            To help pay for his permanent tax giveaway to corporations, Trump
            imposed a secret tax hike on middle-class Americans.
          </Text>
        ),
      },
    ],
  },
  [Issues.Education]: {
    summary:
      "As president, Biden will: Support our educators by giving them the pay and dignity they deserve, invest in resources for our schools so students grow into physically and emotionally healthy adults, and educators can focus on teaching, ensure that no child’s future is determined by their zip code, parents’ income, race, or disability, provide every middle and high school student a path to a successful career and start investing in our children at birth.",
    href: "https://joebiden.com/education/",
    federal: [
      {
        biden: (
          <Text>
            <Text b type="success">
              Make sure teachers receive a competitive wage and benefits.
            </Text>{" "}
            In 2018, public school teachers made 21.4 percent less than workers
            with similar education and experience. And public school teachers’
            average weekly wage hasn’t increased since 1996.
          </Text>
        ),

        trump: (
          <Text>
            The Trump Administration rolled back sexual assault guidelines and{" "}
            <Text b type="error">
              weakened protections against sexual harassment
            </Text>{" "}
            and assault afforded by Title IX (prohibits sex discrimination in
            any education program or activity receiving federal funding).
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Double the number of psychologists,
            </Text>{" "}
            guidance counselors, nurses, social workers, and other health
            professionals in our schools so our kids get the mental health care
            they need.
          </Text>
        ),
        trump: (
          <Text>
            <Text b type="error">
              Betsy DeVos endorsed a plan to put guns in schools.
            </Text>{" "}
            She proposed using federal grant money intended for academics and
            student enrichment to purchase firearms for teachers to keep in
            their classrooms.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Invest in our schools to{" "}
            <Text b type="success">
              eliminate the funding gap between white and non-white districts,
              and rich and poor districts.
            </Text>{" "}
            There’s an estimated $23 billion annual funding gap between white
            and non-white school districts today, and gaps persist between high-
            and low-income districts as well.
          </Text>
        ),

        trump: (
          <Text>
            Betsy DeVos has consistently pushed to expand federal vouchers that
            will take money from public schools to give to private schools. Her
            voucher bill is a scheme that{" "}
            <Text b type="error">
              would take $50 billion from public schools over 10 years.
            </Text>
          </Text>
        ),
      },
    ],
  },
  [Issues.Environment]: {
    summary:
      "Vice President Biden knows there is no greater challenge facing our country and our world than climate change. Biden believes the Green New Deal is a crucial framework for meeting the climate challenges we face. It powerfully captures two basic truths, which are at the core of his plan: (1) the United States urgently needs to embrace greater ambition on an epic scale to meet the scope of this challenge, and (2) our environment and our economy are completely and totally connected.",
    href: "https://joebiden.com/climate-plan/",
    federal: [
      {
        biden: (
          <Text>
            On day one, Biden will use the full authority of the executive
            branch to make progress and significantly reduce emissions.
          </Text>
        ),
        trump: (
          <Text>
            Create tax incentives that enrich corporations at the expense of
            American jobs and the environment.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Incentivize the deployment of clean technology throughout our
              economy through:
            </Text>{" "}
            improving the energy efficiency of our buildings, accelerating the
            deployment of electric vehicles, empowering local communities to
            develop transportation solutions and partnering with farmers and
            ranchers so that better agriculture practices and deployment of
            digesters generate new sources of revenues.
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              Abdicated commitment to Paris Agreement:
            </Text>{" "}
            The Paris Agreement was a historic breakthrough for the world, and
            reflected the power of patient, strategic diplomacy in service of
            America’s long-term national interests. The core of the agreement
            relies on countries continually increasing the ambition of their
            climate targets over time.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Stand up to the abuse of power by polluters who disproportionately
              harm communities of color and low-income communities.
            </Text>{" "}
            Low-income communities and communities of color don’t equally share
            in the benefits of well-paying job opportunities that result from
            our clean energy economy. For example, African Americans hold only
            1% of energy jobs. As President, Biden will make sure these
            communities receive preference in competitive grant programs in the
            Clean Economy Revolution.
          </Text>
        ),

        trump: (
          <Text>
            The Trump Administration has{" "}
            <Text b type="error">
              refused to allow the Arctic Council to even use the words “climate
              change.”
            </Text>{" "}
            President Trump has not only reversed America’s progress on climate
            change, he has also ignored his own defense and intelligence
            leaders’ warnings about the threats that climate change poses to
            global stability and security.
          </Text>
        ),
      },
    ],
  },
  [Issues.GunRights]: {
    summary:
      "Joe Biden knows that gun violence is a public health epidemic. Almost 40,000 people die as a result of firearm injuries every year in the United States, and many more are wounded. Joe Biden also knows how to make progress on reducing gun violence using executive action. After the tragedy at Sandy Hook Elementary School in 2012, President Obama tasked Vice President Biden with developing both legislative proposals and executive actions to make our communities safer. As a result of this effort, the Obama-Biden Administration took more than two dozen actions, including narrowing the so-called “gun show loophole,” increasing the number of records in the background check system, and expanding funding for mental health services.",
    href: "https://joebiden.com/gunsafety/",
    federal: [
      {
        biden: (
          <Text>
            Make sweeping changes to federal gun laws, with{" "}
            <Text b type="success">
              universal background checks, an assault weapons ban, and red flag
              laws
            </Text>{" "}
            checking off much of what activists have demanded over the past few
            years.
          </Text>
        ),

        trump: (
          <Text>
            Reversed policy keeping guns out of the hands of individuals who are
            unable to manage their affairs for mental reasons.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Establish a new Task Force on Online Harassment and Abuse to{" "}
            <Text b type="success">
              focus on the connection between mass shootings, online harassment,
              extremism, and violence against women.
            </Text>
          </Text>
        ),

        trump: (
          <Text>
            Trump{" "}
            <Text type="error" b>
              receives outrageous donations from the NRA.
            </Text>{" "}
            During Trump’s first run for office in 2016, the NRA spent more than
            $30 million in support of his narrow victory.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Supports a{" "}
            <Text b type="success">
              voluntary buyback program
            </Text>{" "}
            through which gun owners can sell assault weapons. If gun owners
            don’t sell their assault weapons, they’ll have to go through a
            background check and register the weapons, like they’re already
            forced to do with machine guns today.
          </Text>
        ),

        trump: (
          <Text>
            Because of actions by the Trump Administration,{" "}
            <Text b type="error">
              records of almost 500,000 fugitives from justice who are
              prohibited from purchasing firearms were deleted from the
              background check system.
            </Text>
          </Text>
        ),
      },
    ],
  },
  [Issues.GayRights]: {
    summary:
      "Donald Trump and Mike Pence have given hate against LGBTQ+ individuals safe harbor and rolled back critical protections for the LGBTQ+ community. By blocking the ability of transgender individuals to openly serve their country, denying LGBTQ+ people access to critical health care, proposing policies allowing federally funded homeless shelters to turn away transgender people and federally funded adoption agencies to reject same-sex couples, and failing to address the epidemic of violence against transgender people—particularly transgender women of color—the Trump-Pence Administration has led a systematic effort to undo the progress President Obama and Vice President Biden made.",
    href: "https://joebiden.com/lgbtq-policy/",
    federal: [
      {
        biden: (
          <Text>
            Biden will make enactment of the Equality Act,{" "}
            <Text b type="success">
              ensures equal rights under the law for LGBTQ+ Americans
            </Text>{" "}
            and guarantees that LGBTQ+ individuals are protected under existing
            civil rights laws, during his first 100 days as President a top
            legislative priority.
          </Text>
        ),

        trump: (
          <Text>
            Deny LGBTQ+ people access to critical health care,{" "}
            <Text b type="error">
              allow federally funded adoption agencies to reject same-sex
              couples.
            </Text>
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Reaffirm that the Civil Rights Act{" "}
            <Text b type="success">
              prohibits employment discrimination based on sexual orientation
              and gender identity{" "}
            </Text>
            and reinstate protections for LGBTQ+ people experiencing
            homelessness.
          </Text>
        ),

        trump: (
          <Text>
            The Trump-Pence administration{" "}
            <Text b type="error">
              argues that the Civil Rights Act excludes protections for LGBTQ+.
            </Text>
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Reverse the transgender military ban,
            </Text>{" "}
            and affirm one’s gender marker and expand access to accurate
            identification documents.
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              Banned transgender people from US military
            </Text>{" "}
            and restricted transgender students’ access to sports, bathrooms,
            and locker rooms in accordance with their gender identity.",
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Reverse Department of Defense policies that perpetuate
            stigmatization of and discrimination against people living with HIV.
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              Deliberately and systematically attempted to gut protections for
              the LGBTQ+ community
            </Text>{" "}
            by carving out broad religious exemptions to existing
            nondiscrimination laws and policies across federal agencies.
          </Text>
        ),
      },
    ],
  },
  [Issues.HealthCare]: {
    summary:
      "As president, Biden will protect the Affordable Care Act from these continued attacks. He opposes every effort to get rid of this historic law – including efforts by Republicans, and efforts by Democrats. Instead of starting from scratch and getting rid of private insurance, he has a plan to build on the Affordable Care Act by giving Americans more choice, reducing health care costs, and making our health care system less complex to navigate.",
    href: "https://joebiden.com/healthcare/",
    federal: [
      {
        biden: (
          <Text>
            Provide the peace of mind and{" "}
            <Text b type="success">
              affordable, quality health care to every American through a new
              choice public option and increasing the value of tax credits to
              lower premiums
            </Text>{" "}
            and extend coverage to more working Americans.
          </Text>
        ),
        trump: (
          <Text>
            After four years, during the worst health crisis in a century, Trump
            continues to claim he has a plan he has yet to reveal.{" "}
            <Text b type="error">
              There still does not seem to be any plan,
            </Text>{" "}
            because other than abolishing the Affordable Care Act — which
            requires insurers to cover pre-existing conditions and which the
            White House is asking the Supreme Court to overturn — the Republican
            Party cannot agree on one.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Repeal the outrageous exception allowing drug corporations to
              avoid negotiating with Medicare over drug prices
            </Text>{" "}
            and limit launch prices for drugs that face no competition, which
            are currently being abused by manufacturers.
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              Tens of thousands of Americans losing their health insurance to a
              coronavirus-induced recession,
            </Text>{" "}
            fears of inadequate or nonexistent health care coverage have never
            been greater.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Achieve mental health parity and expand access to mental health care
          </Text>
        ),

        trump: (
          <Text>
            He keeps promising his magic healthcare plan is right around the
            corner. The truth: he has no plan.
          </Text>
        ),
      },
    ],
  },
  [Issues.Immigration]: {
    summary:
      "President Trump uses family separation as a weapon against desperate mothers, fathers, and children seeking safety and a better life. Further, his obsession with building a wall does nothing to address security challenges while costing taxpayers billions of dollars. Most contraband comes in through our legal ports of entry. Because of this misallocation of funds, the real threats to our security–drug cartels and human traffickers–can more easily evade enforcement. Trump fundamentally misunderstands how to keep America safe because he cares more about governing through fear and division than common sense solutions.",
    href: "https://joebiden.com/immigration/",
    federal: [
      {
        biden: (
          <Text>
            Surge humanitarian resources to the border and foster public-private
            initiatives.{" "}
            <Text b type="success">
              Increase U.S. government resources to support migrants awaiting
              assessment of their asylum claims
            </Text>{" "}
            and to the organizations providing for their needs.
          </Text>
        ),

        trump: (
          <Text>
            Cruel and senseless policies that{" "}
            <Text b type="error">
              separate parents from their children at our border,
            </Text>{" "}
            including the prosecution of parents for minor immigration
            violations as an intimidation tactic.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Protect Dreamers and their families.{" "}
            </Text>
            The Obama-Biden Administration created DACA in 2012 to protect
            “Dreamers,” undocumented immigrants who were brought to the U.S. as
            children, obeyed the law once here, and stayed in school or enlisted
            in the military.
          </Text>
        ),

        trump: (
          <Text>
            Created a humanitarian crisis at our border and "National Emergency"
            that{" "}
            <Text b type="error">
              siphons federal dollars from the Department of Defense to build a
              wall.
            </Text>
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Push to repeal extreme, anti-immigrant state laws that have a
            chilling effect on the{" "}
            <Text b type="success">
              ability of immigrant domestic violence, sexual assault survivors,
              and other victims of crimes to seek safety and justice.
            </Text>
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              Restrict access to asylum in the U.S.,
            </Text>{" "}
            including imposing additional restrictions on anyone traveling
            through Mexico or Guatemala; attempting to prevent victims of gang
            and domestic violence from receiving asylum; systematically
            prosecuting adult asylum seekers for misdemeanor illegal entry; and
            severely limiting the ability of members of the LGBTQIA+ community,
            an especially vulnerable group in many parts of the world, from
            qualifying for asylum as members of a “particular social group.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Rescind the un-American travel and refugee bans, also referred to as
            Muslim bans.
          </Text>
        ),

        trump: (
          <Text>
            <Text b type="error">
              The Trump Administration’s anti-Muslim bias hurts our economy,
              betrays our values, and can serve as a powerful terrorist
              recruiting tool.
            </Text>{" "}
            Prohibiting Muslims from entering the country is morally wrong, and
            there is no intelligence or evidence that suggests it makes our
            nation more secure. It is yet another abuse of power by the Trump
            Administration designed to target primarily black and brown
            immigrants.
          </Text>
        ),
      },
    ],
  },
  [Issues.RacialEquality]: {
    summary:
      "The pandemic has shone a bright light on racial disparities in health and health care — as Black and Brown Americans have suffered and died from the coronavirus at rates far higher than white Americans. The economic crisis has hit Black and Brown communities especially hard, with Black unemployment at 15.4 percent, Latino unemployment at 14.5 percent, and businesses owned by Black, Latino, and Asian American people closing down at alarming rates. Biden plans to advance racial equity as part of our nation’s economic recovery by: spurring public-private investment through a New Small Business Opportunity Plan, reforming Opportunity Zones, making a historic commitment to Equalizing Federal Procurement, and ensuring that his housing plan makes bold investments in homeownership and access to affordable housing for black, brown, and native families",
    href: "https://joebiden.com/racial-economic-equity/",
    federal: [
      {
        biden: (
          <Text>
            Spur more than $50 billion in additional public-private venture
            capital to Black and Brown entrepreneurs by funding successful state
            and local investment initiatives and making permanent the highly
            effective New Markets Tax Credit.
          </Text>
        ),

        trump: (
          <Text>
            Suspended the Obama-Biden Administration’s Affirmatively Furthering
            Fair Housing Rule requiring communities receiving certain federal
            funding to proactively examine housing patterns and identify and
            address policies that have a discriminatory effect.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Spur the construction of{" "}
            <Text b type="success">
              1.5 million homes and public housing units to address the
              affordable housing crisis,
            </Text>{" "}
            increase energy efficiency, and reduce the racial wealth gap.
          </Text>
        ),

        trump: (
          <Text>
            The Obama-Biden Administration fought to extend overtime pay to over
            4 million workers and protect nearly 9 million from losing it. The
            Trump Administration reversed this progress, implementing a new rule
            that leaves millions of workers behind — including 3 million workers
            of color.{" "}
            <Text b type="error">
              Since Trump walked away from protecting these workers who are
              fighting for a place in the middle class, they have lost over $3.2
              billion in foregone overtime wages.
            </Text>
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            Set a goal that{" "}
            <Text b type="success">
              disadvantaged communities receive 40% of overall benefits of
              spending in the areas of clean energy and energy efficiency
              deployment;
            </Text>
            clean, accessible transit and transportation; affordable and
            sustainable housing; training and workforce development; remediation
            and reduction of legacy pollution; and development of critical clean
            water infrastructure.
          </Text>
        ),

        trump: (
          <Text>
            Mischaracterizes BLM protets,{" "}
            <Text b type="error">
              addresses property damage caused by disturbances in the wake of
              the shooting rather than naming the victims of the shootings
            </Text>{" "}
            themselves and would not even condemn a rifle-toting young White
            vigilante who came from out of state to “defend” Kenosha and ended
            up allegedly killing two unarmed protesters.
          </Text>
        ),
      },
    ],
  },
  [Issues.WomensRights]: {
    summary:
      "Biden will pursue an aggressive and comprehensive plan to further women’s economic and physical security and ensure that women can fully exercise their civil rights. Biden will: improve economic security, expand  access to health care and tackle health inequities, help women navigate work and families and end violence against women.",
    href: "https://joebiden.com/womens-agenda/",
    federal: [
      {
        biden: (
          <Text>
            Codify Roe v. Wade, and his Justice Department will do everything in
            its power to{" "}
            <Text b type="success">
              stop the rash of state laws that so blatantly violate Roe v. Wade.
            </Text>
          </Text>
        ),

        trump: (
          <Text>
            Disbanded the Obama-Biden White House Council on Women and Girls,
            which used to make sure the federal government was doing its best to
            tackle issues like equal pay, paid family leave, and poverty in an
            effective manner.
          </Text>
        ),
      },
      {
        biden: (
          <Text b type="success">
            Rescind the Mexico City Policy, which currently bars the U.S.
            federal government from supporting important global health efforts —
            including for malaria and HIV/AIDS — in developing countries simply
            because the organizations providing that aid also offer information
            on abortion services.
          </Text>
        ),

        trump: (
          <Text b type="error">
            Prevents Planned Parenthood and similar organizations from receiving
            Title X funds.
          </Text>
        ),
      },
      {
        biden: (
          <Text>
            <Text b type="success">
              Guarantee paid leave for survivors of domestic violence, sexual
              assault, or stalking,
            </Text>{" "}
            to give them time and space to seek physical or mental care or
            counsel, find new housing, or take other steps to recover.
          </Text>
        ),

        trump: (
          <Text b type="error">
            Grab her by the p*ssy
          </Text>
        ),
      },
    ],
  },
};
