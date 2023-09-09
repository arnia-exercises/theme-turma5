import * as S from './list.styled'

const photos = [
  {
    id: 1,
    image: 'https://picsum.photos/id/237/380/500',
    description: 'lorem ipsum dolor amet consectetur'
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/253/380/500',
    description: 'lorem ipsum'
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/202/380/500',
    description: 'dolor amet consectetur'
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/238/380/500',
    description: 'lorem'
  },
]


export default function List () {
  return (
    <S.List>
      {photos.map(photo => (
        <S.Item key={photo.id}>
          <S.Image src={photo.image} alt={photo.description} />
          <S.Description>{photo.description}</S.Description>
        </S.Item>
      ))}
    </S.List>
  )
}