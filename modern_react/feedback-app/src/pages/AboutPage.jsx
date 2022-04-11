import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'
function AboutPage() {
  return (
    <Card>
      <h2>This is the About Page</h2>
      <Link to='/'>Home</Link>
    </Card>
  )
}

export default AboutPage