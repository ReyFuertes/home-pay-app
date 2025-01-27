

export interface IApplication extends ICommonProperty {
  icon: string;

}
export interface IRecentVisited extends ICommonProperty {

}

export interface ICommonProperty {
  id: string;
  name: string;
}