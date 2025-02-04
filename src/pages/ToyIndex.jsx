import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { toyService } from '../../services/toy.service.js'
import { showErrorMsg, showSuccessMsg } from '../../services/event-bus.service.js'
import { debounce } from 'lodash'

import { ToyList } from '../components/ToyList.jsx'
import ToyFilter from '../components/ToyFilter.jsx'

export function ToyIndex() {
  const [toys, setToys] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filteredToys, setFilteredToys] = useState([])

  useEffect(() => {
    loadToys()
  }, [])

  const debouncedHandleFilterChange = debounce((filteredToys) => {
    setFilteredToys(filteredToys)
  }, 300)

  function handleFilterChange(filteredToys) {
    debouncedHandleFilterChange(filteredToys)
  }

  function loadToys() {
    toyService.query()
      .then(setToys)
      .catch(err => showErrorMsg('couldn`y load toys: ', err))
  }

  if(!toys) return <div className="text-center text-lg">Loading...</div>

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-6">Our Toys</h2>
      <ToyFilter toys={toys} onFilterChange={handleFilterChange} />
      <div className="mt-5">
        <ToyList toys={filteredToys} />
      </div>
    </div>
  )
}

export default ToyIndex