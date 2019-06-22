import MovementHandlerRegistry from './MovementHandlerRegistry';
import FirstInteractionZoneHandler from './interaction-zone/first/FirstInteractionZoneHandler';
import ThirdInteractionZoneHandler from './interaction-zone/third/ThirdInteractionZoneHandler';
import FourthInteractionZoneHandler from './interaction-zone/fourth/FourthInteractionZoneHandler';
import SecondInteractionZoneHandler from './interaction-zone/second/SecondInteractionZoneHandler';
import MovementHandler from './MovementHandler';
import InfluencedPlayersMovementHandler from './influenced-players/InfluencedPlayersMovementHandler';
import CheckBoundCollisionMovementHandler from './boundary/CheckBoundCollisionMovementHandler';

class MovementHandlerRegistryFactory {
  public createMovementHandlerRegistry(): MovementHandlerRegistry {
    const movementHandlerRegistry = new MovementHandlerRegistry();
    movementHandlerRegistry
      .registerInteractionZoneMovementHandler(new FirstInteractionZoneHandler())
      .registerInteractionZoneMovementHandler(new SecondInteractionZoneHandler())
      .registerInteractionZoneMovementHandler(new ThirdInteractionZoneHandler())
      .registerInteractionZoneMovementHandler(new FourthInteractionZoneHandler())
      .registerMovementHandler(new MovementHandler())
      .registerMovementHandler(new InfluencedPlayersMovementHandler())
      .registerMovementHandler(new CheckBoundCollisionMovementHandler())
    ;

    return movementHandlerRegistry;
  }
}

export default MovementHandlerRegistryFactory;