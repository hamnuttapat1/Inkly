import React from 'react'
import { Download, Bookmark, Heart, MessageCircle, Eye } from 'lucide-react'
import { myNotes } from '../../constants/My_notes_data'

const My_notes_page = () => {
  // Calculate stats dynamically from myNotes data
  const stats = [
    { value: myNotes.length.toString(), label: 'Total notes' },
    { value: myNotes.reduce((sum, note) => sum + note.views, 0).toString(), label: 'Total views' },
    { value: myNotes.reduce((sum, note) => sum + note.likes, 0).toString(), label: 'Total likes' }
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
          {myNotes.map((note) => (
            <div key={note.id} className='bg-white rounded-xl p-6 shadow-sm flex flex-col'>
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
                    #{tag}
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