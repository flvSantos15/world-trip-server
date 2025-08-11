type TRequiredOrOptional<InputValue, ResponseValue> =
  InputValue extends undefined
  ? undefined
  : InputValue extends null
  ? null
  : ResponseValue

export const DrizzleMapperHelper = {
  getRelationId<R, T extends { id: R } | undefined | null>(
    prop: T
  ): TRequiredOrOptional<T, R> {
    if (prop === null) return null as any
    if (typeof prop === 'undefined') return undefined as any

    return prop.id as any
  },

  getRelationIdOrNull(prop: { id: number } | null | undefined) {
    if (prop === null) return null
    if (typeof prop === 'undefined') return

    return prop.id
  },

  toNumber(prop: string | boolean | undefined) {
    if (typeof prop === 'undefined') return

    return Number(prop)
  },

  toNumberOrNull(prop: string | boolean | undefined | null) {
    if (prop === null) return null
    if (typeof prop === 'undefined') return

    return Number(prop)
  }
}
