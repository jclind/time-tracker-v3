import React, { useState } from 'react'
import Select from 'react-select'
import customTagButtonStyles from './TagButtonSelectStyles'
import { FiChevronDown } from 'react-icons/fi'
import { BsFillTagFill } from 'react-icons/bs'
import { AiOutlineCheck, AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai'
import './TagsButton.scss'

const TagsButton = () => {
  const [tagsOpen, setTagsOpen] = useState(false)
  const [options, setOptions] = useState([
    { value: 'main', label: 'main', color: '#28a745', id: 0 },
    { value: 'school', label: 'school', color: '#0275d8', id: 1 },
    { value: 'work', label: 'work', color: '#5cb85c', id: 2 },
    { value: 'exercise', label: 'exercise', color: '#5bc0de', id: 3 },
    { value: 'chores', label: 'chores', color: '#f0ad4e', id: 4 },
    { value: 'projects', label: 'projects', color: '#d9534f', id: 5 },
  ])
  const [selectedTag, setSelectedTag] = useState(options[0])

  const selectTag = tagId => {
    if (selectedTag.id !== tagId) {
      setSelectedTag(options.find(option => option.id === tagId))
    }
  }
  return (
    <div className='tags-button-container'>
      {/* <Select
        options={options}
        className='tags-select'
        styles={customTagButtonStyles}
      /> */}
      <div className='tags-select'>
        <button className='selector-container btn'>
          <div className='selector-text'>
            <BsFillTagFill
              className='icon tag-icon'
              color={selectedTag.color}
            />
            <div className='text'>{selectedTag.label}</div>
            <FiChevronDown className='icon' />
          </div>
        </button>
        <div className='dropdown'>
          <label className='dropdown-cell'>Choose A Tag</label>
          <div className='dropdown-cell'>
            <input className='search-input' placeholder='Find or create tag' />
          </div>
          {options.map(option => {
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
                  <AiOutlineDelete className='icon delete-icon' />
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
