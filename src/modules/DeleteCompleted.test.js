import ClearComplete from './DeleteCompleted.js';

describe('Toggle', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
    localStorage.setItem.mockClear();
    document.body.innerHTML = '<article>'
     + '<li></li>'
     + '</article>';
    const elem = { description: 'Testing Todo', completed: false, index: 1 };
    window.localStorage.setItem('todoList', JSON.stringify([elem]));
  });

  test('Todo status to change to completed when clicked', () => {
    const idx = 0;
    const currentStatus = true;
    const subject = new ClearComplete(true);
    const checkComplete = jest.spyOn(subject, 'isComplete');
    subject.isComplete(idx, currentStatus);

    expect(checkComplete).toHaveBeenCalledTimes(1);
    const outcome = JSON.parse(window.localStorage.getItem('todoList'))[idx].completed;
    expect(outcome).toBe(true);
  });
});