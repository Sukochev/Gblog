from django.test import TestCase
from sitepages.templatetags.binary_search import iterative_binary_search


class BinarySearchTestCase(TestCase):
    def test_iterative_binary_search(self):
        array = [1, 3, 5, 6, 45, 77, 99]
        target = 5
        result = iterative_binary_search(target=target, array=array)
        self.assertEqual(result, True)

        target = 4
        result = iterative_binary_search(target=target, array=array)
        self.assertEqual(result, False)

        target = 0
        result = iterative_binary_search(target=target, array=array)
        self.assertEqual(result, False)

        target = 100
        result = iterative_binary_search(target=target, array=array)
        self.assertEqual(result, False)
