import React, { useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { BsFillTagFill } from 'react-icons/bs'
import { AiOutlineCheck, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import useClickOutside from '../../util/useClickOutside'
import './TagsButton.scss'

const TagsButton = () => {
  const [isDropdown, setIsDropdown] = useState(false)
  const [tagSearchVal, setTagSearchVal] = useState('')
  const [options, setOptions] = useState([
    { value: 'main', label: 'main', color: '#28a745', id: 0 },
    { value: 'school', label: 'school', color: '#0275d8', id: 1 },
    { value: 'work', label: 'work', color: '#5cb85c', id: 2 },
    { value: 'exercise', label: 'exercise', color: '#5bc0de', id: 3 },
    { value: 'chores', label: 'chores', color: '#f0ad4e', id: 4 },
    { value: 'projects', label: 'projects', color: '#d9534f', id: 5 },
  ])
  const [selectedTag, setSelectedTag] = useState(options[0])

  const tagsButtonContainer = useClickOutside(() => {
    setIsDropdown(false)
  })

  const selectTag = tagId => {
    if (selectedTag.id !== tagId) {
      setSelectedTag(options.find(option => option.id === tagId))
    }
    setIsDropdown(false)
    setTagSearchVal('')
  }
  const deleteTag = (e, tagId) => {
    e.stopPropagation()

    if (options.length <= 1) {
      // !FIX ME: need error when deleting last tag
      return console.log('Cannot have 0 tags in list')
    }

    const newOptions = options.filter(option => {
      return option.id !== tagId
    })
    setOptions(newOptions)

    // If deleted tag is the current tag, change the current tag
    if (tagId === selectedTag.id) {
      setSelectedTag(newOptions[0])
    }
  }

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown)
  }

  return (
    <div className='tags-button-container' ref={tagsButtonContainer}>
      <div className='tags-select'>
        <button className='selector-container btn' onClick={toggleDropdown}>
          <div className='selector-text'>
            <BsFillTagFill
              className='icon tag-icon'
              color={selectedTag.color}
            />
            <div className='text'>{selectedTag.label}</div>
            <FiChevronDown className='icon' />
          </div>
        </button>
        <div className={isDropdown ? 'dropdown visible' : 'dropdown'}>
          <label className='dropdown-cell'>Choose A Tag</label>
          <div className='dropdown-cell'>
            <input
              className='search-input'
              placeholder='Find or create tag'
              value={tagSearchVal}
              onChange={e => setTagSearchVal(e.target.value)}
            />
          </div>
          {options.map(option => {
            if (
              tagSearchVal &&
              !option.label.toLowerCase().includes(tagSearchVal.toLowerCase())
            ) {
              return null
            }
            return (
              <div
                className='dropdown-cell option'
                key={option.id}
                onClick={() => selectTag(option.id)}
              >
                <BsFillTagFill icon='icon option-icon' color={option.color} />
                <div className='text'>{option.label}</div>
                {selectedTag.id === option.id && (
                  <AiOutlineCheck className='icon selected-icon' />
                )}
                <div className='actions'>
                  <AiOutlineEdit className='icon edit-icon' />
                  <AiOutlineDelete
                    className='icon delete-icon'
                    onClick={e => deleteTag(e, option.id)}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default TagsButton
