import { numberToWordsSRB } from '../index';

describe('number-to-words-srb integration', () => {
    it('should respond with nula if the number is 0', () => {
        const response = numberToWordsSRB(0)
        expect(response).toBe('nula')
    })
    it('should respond with dvanaest if the number is 12', () => {
        const response = numberToWordsSRB(12)
        expect(response).toBe('dvanaest')
    })
    it('should respond with dve hiljade petsto pedeset dva if the number is 2552', () => {
        const response = numberToWordsSRB(2552)
        expect(response).toBe('dve hiljade petsto pedeset dva')
    })
    it('should respond with sedam hiljada trista pedeset dva if the number is 2552', () => {
        const response = numberToWordsSRB(7352)
        expect(response).toBe('sedam hiljada trista pedeset dva')
    })
    it('should respond with minus 5', () => {
        const response = numberToWordsSRB(-5)
        expect(response).toBe('minus pet')
    })
    it('should respond with minus petnaest', () => {
        const response = numberToWordsSRB(-15)
        expect(response).toBe('minus petnaest')
    })
    it('should respond with minus dvadeset osam', () => {
        const response = numberToWordsSRB(-28)
        expect(response).toBe('minus dvadeset osam')
    })
    it('should respond with minus dvesta trideset dva', () => {
        const response = numberToWordsSRB(-232)
        expect(response).toBe('minus dvesta trideset dva')
    })
    
    it('should respond with "dvehiljadepetstopedesetdva" if the number is 2552, and second parameter false', () => {
        const response = numberToWordsSRB(2552, false)
        expect(response).toBe('dvehiljadepetstopedesetdva')
    })

    it('should respond with "minus dvestatridesetdva" if the number is -232, and second parameter false', () => {
        const response = numberToWordsSRB(-232, false)
        expect(response).toBe('minus dvestatridesetdva')
    })
})
