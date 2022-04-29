import { render } from '@testing-library/react'
import Profile from '../../components/Profile/Profile'

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
}

test('Should render the user profile', () => {
  render(<Profile user={user} />)
})
// this passed but I am not sure why. Alex explained it to be but I don't see why it passed. I rendered the Profile component and set user to user information. What would be a best practice for this example??
