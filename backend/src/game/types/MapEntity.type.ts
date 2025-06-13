import { gamestate } from 'common';
import { MapEntity as CommonMapEntity } from 'common'; // common/maps에서 MapEntity를 가져옴

export type MapEntityState = gamestate.IMapEntityState;
export type EntityShape = gamestate.IEntityShape;
export type MapEntity = CommonMapEntity;
