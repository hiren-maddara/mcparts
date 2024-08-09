import { Fragment } from 'react'
import DashboardLayout from '../dashboard/layout'


export const metadata = {
  title: 'sales',
  description: 'sell items to clients, see recent sales',
}

function SalesLayout(props) {
  return (
    <DashboardLayout>
      <Fragment>
        {props.children}
      </Fragment>
    </DashboardLayout>
  )
}

export default SalesLayout


