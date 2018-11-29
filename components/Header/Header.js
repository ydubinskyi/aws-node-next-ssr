import Link from 'next/link';

import './Header.scss';

export default () => (
  <div className="Header">
    <div className="Header-inner">
      <div className="Header-logo">
        <Link href="/">
          <a>AWS Lambda Next example</a>
        </Link>
      </div>
      <div className="Header-links">
        <Link href="/">
          <a>Random</a>
        </Link>

        <Link href="/dogs">
          <a>Dogs</a>
        </Link>
      </div>
    </div>
  </div>
);
