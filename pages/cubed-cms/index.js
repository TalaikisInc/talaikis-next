import React from 'react'
import { FaCheckCircle, FaSearchDollar, FaMailBulk, FaPoll, FaUsers } from 'react-icons/fa'

import Layout from 'components/layout'
import Features from 'components/features/cubed'
import CubedHero from 'components/sections/hero/cubed'
import Tabs from 'components/tabs'
import TabContent from 'components/tabs/content'

const ums = [
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User register', url: 'https://cubedcms.talaikis.com/sign-up' },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User login', url: 'https://cubedcms.talaikis.com/sign-in' },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User sign out', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Confirm account', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User delete', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User dashboard', url: 'https://cubedcms.talaikis.com/dashboard' },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'User settings', url: 'https://cubedcms.talaikis.com/dashboard' },
  // in dev:
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Social sign in', url: 'https://cubedcms.talaikis.com/sign-in' }
]

const marketing = [
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Newsletter - subscribe/ unsubscribe', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Send newsletter (for admins)', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Push notifications - subscribe/ unsubscribe', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Send push notification (for admins)', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Referral/ affiliates system', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Role system', url: null }
]

const payments = [
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Subscriptions', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Upgrades and downgrades', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Subscription cancellation', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Top up/ charge', url: null }
]

const admin = [
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'List affiliates', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Get affiliate', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Set rate', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Referred by and simple sales reporting', url: null },
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'List subscriptions', url: null }
]

const other = [
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Server side rendering', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Fully serverless', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'One command deploy/ destruction', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Unlimited projects', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Contact us', url: 'https://talaikis.com/#contact' },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Database backups', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Upload functions', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Email templates', url: null },
  { icon: <FaCheckCircle className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'ORM', url: null },
  // dev
  { icon: <FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" />, txt: 'Global', url: null }
]

const Notes = () => (
  <div className="text-center w-1/3 mx-auto">
    <p className="flex flex-no-wrap mx-auto w-full pb-2"><FaCheckCircle className="text-gray-500 w-6 h-6 flex-shrink-0 mr-4" /> - depends on client requirements, partial implementation or in development</p>
    <p className="pb-2"><strong>Backend technologies:</strong> AWS Lambda, DynamoDB, SES, SNS, SQS, CloudWatch.</p>
    <p className="pb-2"><strong>Frontend technologies:</strong> Next.js, atomic CSS and S3/ Route 53 or Vercel</p>
    <p className="pb-2"><strong>Security:</strong> Encrypted session, JWT, token hashing.</p>
  </div>
)

const tabs = [
  { icon: <FaUsers className="w-5 h-5 mr-3" />, name: 'UMS', content: <TabContent title="User management" desc="All you need to manage users" cont={ums} /> },
  { icon: <FaMailBulk className="w-5 h-5 mr-3" />, name: 'Marketing', content: <TabContent title="Marketing" desc="cubedCMS marketing features" cont={marketing} /> },
  { icon: <FaSearchDollar className="w-5 h-5 mr-3" />, name: 'Payments', content: <TabContent title="Payment solutions" desc="" cont={payments} /> },
  { icon: <FaSearchDollar className="w-5 h-5 mr-3" />, name: 'Admin', content: <TabContent title="Administration" desc="" cont={admin} /> },
  { icon: <FaPoll className="w-5 h-5 mr-3" />, name: 'Other', content: <TabContent title="Other features" desc="Other cubedCMS features" cont={other} /> }
]

const Cubed = () => (
  <Layout title="cubedCMS" path="/cubed-cms" image="https://www.talaikis.com/static/images/cubed.jpg">
    <CubedHero />
    <Features />
    <Tabs tabs={tabs} />
    <Notes />
  </Layout>
)

export default Cubed
