import { render, screen } from '@testing-library/react'
import Profile from '../../components/Profile/Profile'

describe('App', () => {
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
  it('Should render the user profile information just as name, avatar, motto. etc..,', async () => {
    render(<Profile user={user} />)

    const name = screen.getByText('Vonta')
    const avatar = screen.getByAltText('avatar')
    const header = screen.getByAltText('header')
    const motto = await screen.findByLabelText('motto')
    const likes = screen.queryByText('Anime')
    const color = screen.getByLabelText('favColor')

    expect(name).toBeInTheDocument()
    expect(avatar).toBeInTheDocument()
    expect(header).toBeInTheDocument()
    expect(motto).toBeInTheDocument()
    expect(color).toHaveStyle({ color: 'crimson' })

    expect(likes).toBeInTheDocument()
  })
})
// this passed but I am not sure why. Alex explained it to be but I don't see why it passed. I rendered the Profile component and set user to user information. What would be a best practice for this example??
