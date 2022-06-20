import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'
import { useStateContext } from '../../contexts/ContextProvider'

const SparkLine = ({ id, height, width, color, data, type, currentColor}) => {
  const { currentMode } = useStateContext()

  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      LineWidth={1}
      valueType="Numeric"
      fill={color}
      border={{color: currentColor, width: 2}}
      dataSource={data}
      xName="x"
      yName='yval'
      type={type}
      tooltipSettings={{
        visible: true,
        format: '${x} : data ${yval}',
        trackLineSettings: {
          visible: true
        }
      }}
      className={currentMode === 'Dark' ? 'bg-secondary-dark-bg' : 'bg-white'}
    >
      <Inject services={[SparklineTooltip]}/>
    </SparklineComponent>
  )
}

export default SparkLine