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
    
})