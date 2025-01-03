export type PropsObject = {
  [key: string]: unknown
}

export type ContextPropsObject = {
  [key: string]: unknown
}

export type ThemeContext = {
  [key: string]: RenderSpecInputOrPair
}

export type ThemeContextWithChildren =
  React.PropsWithChildren<ThemeContext>

export type RenderSpecInputOrPair =
  RenderSpecInput | RenderSpecPair

export type RenderSpecInput =
  RenderSpecValue | RenderSpecFunction

export type RenderSpecValue =
  ContextPropsObject | null

export type RenderSpecFunction = (
  props:    ContextPropsObject,
  ref:      React.ForwardedRef<unknown>,
  context:  ContextPropsObject
) => ContextPropsObject | React.ReactElement

export type RenderSpecPair =
  [RenderComponent, RenderSpecInput]

export type RenderSpecInputFunction = (
  context: ContextPropsObject
) => RenderSpecInputOrPair

export type RenderComponent =
  React.ComponentType<ContextPropsObject>
  // React.ComponentType<object>
  // React.ComponentType<object & { ref: React.Ref<unknown> }>
  // React.ComponentType<React.ForwardedRef<object>>

export type RenderSpec =
  RenderSpecInputFunction | null | string

export type RenderProps = {
  context: ThemeContext,
  spec: RenderSpec,
  Implementation: RenderComponent,
  props: ContextPropsObject,
  ref: React.ForwardedRef<unknown>
}

// export type ContextPropsWithChildren = React.PropsWithChildren<ContextPropsObject>

// export type ContextProviderProps = React.ProviderProps<ContextPropsObject>
// export type ContextProvider = React.ProviderExoticComponent<ContextProviderValue>
// export type ContextProviderWrapper = ({ children, ...props }: ContextPropsWithChildren) => ContextProvider
// export type ContextProviderValue = {
//   [key: string]: unknown | RenderSpecInputOrPair
// }




//export type ThemedType = {
//  Context: React.Context<ContextPropsObject>,
//  Provider: ContextProviderWrapper,
//  Consumer: unknown,
//  Component: unknown
//}