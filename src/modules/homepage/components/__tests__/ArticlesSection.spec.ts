import { mount, flushPromises } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest';
import ArticlesSection from '../ArticlesSection.vue'

describe('ArticlesSection', () => {
  it('should component render correctly', () => {
    const wrapper = mount(ArticlesSection)
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('ensure fetches articles are rendered', async () => {
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
    expect(wrapper.find('.article__title').text()).toBe('Article 4')
    expect(wrapper.find('.article__author').text()).toBe('By Author 4')
    expect(wrapper.find('.article__text').text()).toBe('Eaque ipsa quae ab illo inventore veritatis et quasi...')
    expect(wrapper.find('.article__image').attributes('src')).toBe('http://localhost:3000/src/assets/images/article4.jpg')
  })
})