import process from 'node:process'
import { now } from '@abw/badger-timestamp'

const PACKAGE_VERSION = JSON.stringify(process.env.npm_package_version)
const BUILD_DATE      = JSON.stringify(now().date())

const SITE_VERSION    = PACKAGE_VERSION
const SITE_DATE       = BUILD_DATE

export default {
  PACKAGE_VERSION,
  BUILD_DATE,
  SITE_VERSION,
  SITE_DATE
}
