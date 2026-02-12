import React from 'react'
import { Download, Bookmark, Heart, MessageCircle, Eye } from 'lucide-react'

const My_notes_page = () => {
  const stats = [
    { value: '4', label: 'Total notes' },
    { value: '2113', label: 'Total views' },
    { value: '400', label: 'Total likes' }
  ]

  const notes = [
    {
      title: 'Biology : Mitosis and Meiosis',
      author: 'Student 2',
      description: 'Detailed diagrams and explanations of cell division processes. Comparison between mitosis and meiosis with color-coded phases and...',
      tags: ['#Biology', '#Cell'],
      attachments: 3,
      likes: 222,
      comments: 34,
      views: 1132
    },
    {
      title: 'Calculus II - Integration techniques',
      author: 'Student 1',
      description: 'Comprehensive notes covering integration by parts, trigonometric substitution, partial fractions, and improper integrals. Includes worked...',
      tags: ['#Calculus', '#Integration', '#Math'],
      attachments: 4,
      likes: 133,
      comments: 55,
      views: 334
    },
    {
      title: 'Data Structures : Tree and graph',
      author: 'Student 3',
      description: 'Implementation guide for binary trees, BST, AVL trees, and graph traversal algorithms. Includes pseudocode and complexity analysis...',
      tags: ['#Algorithm', '#Datastructure'],
      attachments: 0,
      likes: 24,
      comments: 2,
      views: 321
    }
  ]

  return (
    <div className='w-full h-full bg-[#EEF2E1] overflow-auto'>
      <div className='px-8 py-6'>
        {/* Stats Cards */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
          {stats.map((stat, index) => (
            <div key={index} className='bg-white rounded-xl p-6 shadow-sm'>
              <div className='text-4xl font-semibold mb-2'>{stat.value}</div>
              <div className='text-gray-600'>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Notes Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {notes.map((note, index) => (
            <div key={index} className='bg-white rounded-xl p-6 shadow-sm flex flex-col'>
              {/* Title */}
              <h3 className='text-lg font-semibold text-gray-800 mb-3'>{note.title}</h3>
              
              {/* Author */}
              <div className='flex items-center gap-2 mb-3'>
                <div className='w-6 h-6 bg-green-600 rounded-full'></div>
                <span className='text-sm font-medium text-gray-700'>{note.author}</span>
              </div>

              {/* Description */}
              <p className='text-sm text-gray-600 mb-4 flex-grow line-clamp-3'>
                {note.description}
              </p>

              {/* Attachments */}
              {note.attachments > 0 && (
                <div className='mb-4'>
                  <span className='text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full'>
                    📎 {note.attachments} Attachment(s)
                  </span>
                </div>
              )}

              {/* Tags */}
              <div className='flex flex-wrap gap-2 mb-4'>
                {note.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className='text-xs text-green-700 bg-green-50 px-3 py-1 rounded-full font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className='border-t border-gray-200 mb-4'></div>

              {/* Stats and Actions */}
              <div className='flex items-center justify-between text-sm text-gray-600'>
                <div className='flex items-center gap-4'>
                  <div className='flex items-center gap-1'>
                    <Heart size={16} />
                    <span>{note.likes}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <MessageCircle size={16} />
                    <span>{note.comments}</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <Eye size={16} />
                    <span>{note.views}</span>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='hover:text-gray-800 transition'>
                    <Download size={16} />
                  </button>
                  <button className='hover:text-gray-800 transition'>
                    <Bookmark size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default My_notes_page
