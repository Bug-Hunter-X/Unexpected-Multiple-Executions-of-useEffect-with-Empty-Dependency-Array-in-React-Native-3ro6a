```javascript
import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (mounted) {
      console.log('Effect runs only once after mount');
      // Your code here
    }
  }, [mounted]);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <View>
      <Text>My Component</Text>
    </View>
  );
};

export default MyComponent;
```