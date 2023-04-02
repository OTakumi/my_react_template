---
to: src/components/<%= atmic %>/<%= h.changeCase.pascal(component_name)%>/<%= h.changeCase.pascal(component_name) %>.tsx
---

import React from "react";

type Props = {}

export const <%= h.changeCase.pascal(component_name) %>: React.FC<Props> = () => {
	return (
		<></>
	)
}

export default <%= h.changeCase.pascal(component_name) %>
