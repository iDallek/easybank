import { mount, flushPromises } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest';
import ArticlesSection from '../ArticlesSection.vue'

describe('ArticlesSection', () => {
  it('Should component render correctly', () => {
    const wrapper = mount(ArticlesSection)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('Should render only 4 articles fetches', async () => {
    const articles = [
      {
        id: 1,
        title: 'Article 1',
        author: 'Author 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'article1.jpg'
      },
      {
        id: 2,
        title: 'Article 2',
        author: 'Author 2',
        content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem.',
        image: 'article2.jpg'
      },
      {
        id: 3,
        title: 'Article 3',
        author: 'Author 3',
        content: 'At vero eos et accusamus et iusto odio dignissimos ducimus.',
        image: 'article3.jpg'
      },
      {
        id: 4,
        title: 'Article 4',
        author: 'Author 4',
        content: 'Eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
        image: 'article4.jpg'
      },
      {
        id: 5,
        title: 'Article 5',
        author: 'Author 5',
        content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut.',
        image: 'article5.jpg'
      }
    ]
    
    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(articles)
      } as Response)
    })

    const wrapper = mount(ArticlesSection)
    await flushPromises()

    expect(wrapper.findAll('.article')).toHaveLength(4)
    expect(wrapper.find('.article__title').text()).toBe('Article 5')
    expect(wrapper.find('.article__author').text()).toBe('By Author 5')
    expect(wrapper.find('.article__text').text()).toBe('Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...')
    expect(wrapper.find('.article__image').attributes('src')).toBe('http://localhost:3000/src/assets/images/article5.jpg')
  })

  it('Should render article content be shortened to approximately 130 characters', async () => {
    const mockArticles = [{
      id: 1,
      title: 'Article 1',
      author: 'Author 1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ',
      image: 'article1.jpg'
    }]

    vi.spyOn(window, 'fetch').mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockArticles)
      } as Response)
    })

    const wrapper = mount(ArticlesSection)
    await flushPromises()

    expect(wrapper.find('.article__text').text()).toBe('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....')
  })
})