class i{constructor(){this.instances={}}isInitialized(n){return!!this.instances[n.id]}getInstance(n){const t=this.getElement(n);if(!t)return null;if(this.instances[t.id])return this.instances[t.id];const s=this.createInstance(t);return this.instances[t.id]=s,s}}export{i as C};
