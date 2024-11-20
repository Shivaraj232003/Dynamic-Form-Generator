export const validateJSON = (jsonString: string): [boolean, any] => {
    try {
      const parsed = JSON.parse(jsonString);
      return [true, parsed];
    } catch (error) {
      return [false, null];
    }
  };
  