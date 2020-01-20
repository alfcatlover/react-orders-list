import React from 'react';
import classNames from 'classnames';
import {withRouter} from 'next/router'
import {Link} from '../routes';

function NavLink({router, route, title}) {
  return (
    <Link key={route} route={route}>
      <a className={classNames({
        "nav-link": true,
        "active": router.route.indexOf(route) !== -1
      })}>{title}</a>
    </Link>
  )
}

export default withRouter(NavLink);