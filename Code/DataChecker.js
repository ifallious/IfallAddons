

export class DataChecker {
    /**
     * 
     * @param {RegExp} regex - Regex to be ran.
     * @param {Object} target - Target object. eg Dungeon.
     * @param {String} name - Name of the variable.
     * @param {String} dataType - Final data type of the object, eg 'int', 'string', 'float', 'bool'.
     * @param {Boolean} fallBack - If no match found, return the last known value.
     */
    constructor(regex, target, name, dataType="string", fallBack) {
        this.regex = regex
        this.target = target
        this.name = name
        this.dataType = dataType
        this.fallBack = fallBack
        this.lastKnownIndex = null
        this.lastKnownValue = null

        this.modifierFunc = null
    }
    // Function to be ran on the value before it gets set on the target object. Allows for further flexibility.
    setModifierFunction(func) {
        this.modifierFunc = func
        return this
    }
    // Convert the match value to the correct type.
    convertType(value) {
        if (this.dataType == "bool") return !!value
        if (this.dataType == "string") return typeof(value) == "string" ? value : value.toString()
        if (this.dataType == "int") return parseInt(value)
        if (this.dataType == "float") return parseFloat(value)
        return value
    }
    foundData(matchObject) {
        let data = this.convertType(matchObject[1])
        if (this.modifierFunc) data = this.modifierFunc(data)
        
        this.lastKnownValue = data
        this.target[this.name] = data
    }
    // Check the array
    check(strings) {
        if (this.lastKnownIndex && this.lastKnownIndex < strings.length) {
            let match = strings[this.lastKnownIndex].match(this.regex)
            if (match) {
                return this.foundData(match)
            }
        }
        for (let i = 0; i < strings.length; i++) {
            let match = strings[i].match(this.regex)
            if (!match) continue
            this.lastKnownIndex = i
            return this.foundData(match)
        }
        
        if (this.fallBack) return this.lastKnownValue
    }
}

export class ScoreboardChecker extends DataChecker {}
export class TabListChecker extends DataChecker {}
