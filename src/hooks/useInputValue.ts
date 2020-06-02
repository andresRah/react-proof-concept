import { useState } from 'react'

/**
 * useInputValue
 * @param {string} initialValue
 * @returns
 */
export const useInputValue = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)
    const onChange = (e: any) => setValue(e?.target?.value)

    return { value, onChange }
}
